import { InventoryContext } from "./InventoryContext";
import supabase from "../api/supaBase";
import { useState, useEffect } from "react";
import { sileo } from "sileo";
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [units, setUnits] = useState([]);
  const fetchUnits = async () => {
    const { data, error } = await supabase.from("units").select("*");
    if (error || !data) {
      console.log(error);
      return;
    }
    sileo.success("Unidades cargadas exitosamente");
    setUnits(data);
  };

  useEffect(() => {
    fetchUnits();
  }, []);

  useEffect(() => {
    console.log("units", units);
  }, [units]);

  const fetchInventory = async () => {
    const { data, error } = await supabase
      .from("products_inventory")
      .select("*");
    if (error || !data) {
      console.log(error);
      return;
    }
    sileo.success("Inventario cargado exitosamente");
    console.log(data);
    setInventory(data);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const searchStock = (nombre) => {
    const item = inventory.find((item) => item.nombre === nombre);
    if (!item) {
      console.log("No se encontro el producto");
      return 0;
    }
    return item.cantidad;
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        fetchInventory,
        searchStock,
        units,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
