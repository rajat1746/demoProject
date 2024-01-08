// contexts/MenuContext.js
import { createContext, useContext } from "react";

const MenuContext = createContext();

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export { MenuContext, useMenuContext };
