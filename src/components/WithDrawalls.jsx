import { useEffect, useState } from "react";
import supabase from "../api/supaBase";
import "./WithDrawalls.css";

export function Withdrawals() {
    const [movements, setMovements] = useState([]);
      useEffect(() => {
        async function getMovements(){
          const { data, error} = await supabase.from("inventory_movements").select(`
          *,products_inventory(
          nombre, precio_unit)
          `)
          .order("created_at", { ascending:false});

          if(error){
            console.error("Error obteniendo los datos: ", error);
          }else{
            setMovements(data)
          }
        }
        getMovements();
      },[])
      
      
  return (

    <section className="movements_form">
      <h2>Historial de Movimientos</h2>
      <table className="table_movements">
        <thead>
          <tr>
            <th className="th__movements">Fecha</th>
            <th className="th__movements">Producto</th>
            <th className="th__movements">Precio (Und).</th>
            <th className="th__movements">Precio total</th>
            <th className="th__movements">Cantidad</th>
            <th className="th__movements">Motivo</th>
            <th className="th__movements">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((mov)=>(
            <tr key={mov.id}>
              <td>{new Date(mov.created_at).toLocaleString()}</td>
              <td>{mov.products_inventory?.nombre || "N/A"}</td>
              <td>
                {mov.products_inventory?.precio_unit ? `$${mov.products_inventory.precio_unit}` : "N/A"}
              </td>
              <td>${mov.products_inventory?.precio_unit * mov.change}</td>
              <td className={mov.change > 0 ? "positive-change" : "negative-change"}>
                {mov.change > 0 ? `+${mov.change}` : mov.change}
              </td>
              <td>{mov.reason}</td>
              <td>{/* Acciones para el futuro */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
