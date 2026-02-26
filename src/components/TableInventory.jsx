import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { Preview } from "./Preview";
import {
  BoxIcon,
  TagIcon,
  DollarIcon,
  CubeIcon,
  CircleAddIcon,
} from "../assets/Icons/Icons";
import supabase from "../api/supaBase.js";
import "./TableInventory.css";

export function TableInventory() {
  const { register, handleSubmit, reset } = useForm();
  const [itemsList, setItemsList] = useState([]);
  
  // Extraemos la función de actualizar Stats del archivo Padre (Inventory.jsx)
  const { updateStats } = useOutletContext() || {};

  
  useEffect(() => {
    async function fetchInventory() {
      const { data, error } = await supabase
        .from("products_inventory")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error al cargar inventario:", error);
      } else {
        setItemsList(data);
      }
    }
    fetchInventory();
  }, []);

  const onSubmit = async (data) => {
    console.log("Información a enviar a Supabase", data);
  
      const {data: insertedData, error} = await supabase.from('products_inventory').insert([
        {
          nombre: data.nombre,
          cantidad: Number(data.cantidad),
          precio_unit: Number(data.precio_unit),
          unit_id: Number(data.unit_id),
        }
      ])
      .select();

      if(error){
        console.error("Error al insertar el producto", error);
        alert("hubo un error insertando")
        return;
      }
      
      else{
        console.log("Producto insertado correctamente en DB:", insertedData);
        
      
        const { error: errorMovimiento } = await supabase
          .from("inventory_movements")
          .insert([
            {
              product_id: insertedData[0].id,
              change: Number(data.cantidad),
              reason: "Ingreso inicial de producto"
            }
          ]);

        if (errorMovimiento) {
          console.error("Error al registrar el movimiento:", errorMovimiento);
          
        } else {
          console.log("Movimiento de inventario registrado correctamente");
        }

        setItemsList([...itemsList, insertedData[0]]);
        reset();
        
        // Actualizamos las tarjetas de Inventory en vivo
        if (updateStats) updateStats();

        alert("¡Producto agregado correctamente!");
      }
  };

  const handleDelete = async (id) => {
    
    const isConfirmed = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
    if (!isConfirmed) return;

   
    const productToDelete = itemsList.find(item => item.id === id);
    const cantidadPerdida = productToDelete ? productToDelete.cantidad : 0;

    // Anotamos la eliminación en el libro Historial de Movimientos antes de borrarlo
    await supabase.from("inventory_movements").insert([
      {
        product_id: id,
        change: -Math.abs(cantidadPerdida), 
        reason: "Producto eliminado",
      }
    ]);
    
    // borramos el producto original de forma segura
    const { error } = await supabase
      .from("products_inventory")
      .delete()
      .eq("id", id); 

    if (error) {
      console.error("Error eliminando producto:", error);
      alert("Hubo un error al eliminar el producto: " + (error.message || JSON.stringify(error)));
    } else {
      // Actualizamos el estado visual eliminándolo de la lista de React
      console.log(`Producto ${id} eliminado correctamente`);
      setItemsList((prevItems) => prevItems.filter((item) => item.id !== id));
      
      // Actualizamos las tarjetas de Inventory en vivo
      if (updateStats) updateStats();
    }
  };

  return (
    <main className="table-inventory-container">
      <section className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h2>Agregar Producto</h2>
          </header>
          <label>
            <span className="label-text">
              <BoxIcon />
              Nombre del Producto
            </span>
            <input
              type="text"
              {...register("nombre", { required: true })}
              placeholder="Nombre del Producto"
              required
            />
          </label>
          <label>
            <span className="label-text">
              <TagIcon />
              Categoria del Producto
            </span>
            <select {...register("unit_id", { required: true })} className="Category__section">
              <option value="5">Carnes</option>
              <option value="8">Vegetales</option>
              <option value="10">Insumos (Liquidos)</option>
              <option value="11">Insumos (Secos)</option>
              <option value="9">Bebidas</option>
            </select>
          </label>
          <section className="input-group">
            <label>
              <span className="label-text">
                <CubeIcon />
                Cantidad
              </span>
              <input
                className="input-row"
                type="number"
                {...register("cantidad", { required: true, min: 0 })}
                placeholder="Cantidad"
                min="0"
                required
              />
            </label>
            <label>
              <span className="label-text">$ Monto en dólares</span>
              <input
                className="input-row"
                type="number"
                {...register("precio_unit", { required: true, min: 0 })}
                placeholder="Monto en dólares"
                min="0"
                step="0.01"
                required
              />
            </label>
          </section>
          <button type="submit">
            <CircleAddIcon />
            Agregar
          </button>
        </form>
      </section>
      <section className="preview-container">
        {/* Pasamos la funcion onDelete como si fuera un componente normal */}
        <Preview itemsList={itemsList} onDelete={handleDelete} />
      </section>
    </main>
  );
}
