import { useState } from "react";
import { useForm } from "react-hook-form";
import { Preview } from "./Preview";
import {
  BoxIcon,
  TagIcon,
  DollarIcon,
  CubeIcon,
  CircleAddIcon,
} from "../assets/Icons/Icons";
import "./TableInventory.css";

export function TableInventory() {
  const { register, handleSubmit, reset } = useForm();
  const [itemsList, setItemsList] = useState([]);
  const onSubmit = (data) => {
    console.log("Informacion del producto", data);
    setItemsList([...itemsList, data]);
    reset();
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
              {...register("nombre_producto", { required: true })}
              placeholder="Nombre del Producto"
              required
            />
          </label>
          <label>
            <span className="label-text">
              <TagIcon />
              Categoria del Producto
            </span>
            <input
              type="text"
              {...register("categoria_producto", { required: true })}
              placeholder="Categoria del Producto"
              required
            />
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
                {...register("cantidad", { required: true })}
                placeholder="Cantidad"
                required
              />
            </label>
            <label>
              <span className="label-text">$ Monto en dólares</span>
              <input
                className="input-row"
                type="number"
                {...register("monto_dolares_aprox", { required: true })}
                placeholder="Monto en dólares"
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
        <Preview itemsList={itemsList} />
      </section>
    </main>
  );
}
