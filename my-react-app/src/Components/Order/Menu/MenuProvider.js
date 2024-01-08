// components/MenuProvider.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {MenuContext} from "./MenuContext";

// components/MenuProvider.js
// ... (other imports and code)

const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

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

  const addSelectedItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const removeSelectedItem = (itemId) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.attributes.menu_id !== itemId));
  };

  const clearSelectedItems = () => {
    setSelectedItems([]);
  };

  return (
    <MenuContext.Provider
      value={{
        menus,
        error,
        selectedItems,
        addSelectedItem,
        removeSelectedItem,
        clearSelectedItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
