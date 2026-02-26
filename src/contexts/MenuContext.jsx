import { createContext, useContext } from "react";

export const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};
