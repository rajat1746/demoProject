// components/CategoryProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryContext from './CateogaryContext';

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://test.ashianafresh.com/api/categories')
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        setError(error.message || 'An error occurred');
      });
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, error }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
