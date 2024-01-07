// components/MenuProvider.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuContext from "./MenuContext";

const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://test.ashianafresh.com/api/menus")
      .then((res) => {
        setMenus(res.data.data);
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
      });
  }, []);

  return (
    <MenuContext.Provider value={{ menus, error }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
