import { createContext, useContext } from "react";

export const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders debe estar dentro de un OrderProvider");
  }
  return context;
};
