import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContextProvider.jsx';
import CartItem from './CartItem.jsx';
import '../css/cart.css';

function Cart() {
  const { cart } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return <p className='emptyCart'>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your products:</h2>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Cart;
