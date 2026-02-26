import { createContext, useContext } from "react";

export const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);
