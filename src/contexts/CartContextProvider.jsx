import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === productId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item => {
        if (item.id === productId) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return null;
          }
        }
        return item;
      }).filter(item => item !== null)
    );
  };

  const cartCount = cart.reduce((total, product) => total + product.count, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
