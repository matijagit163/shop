import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContextProvider';
import '../css/cart-item.css';

function CartItem({ product }) {
  if (!product) {
    return <p>Invalid product</p>;
  }

  const { imgUrl, text, price, count, id } = product;

  const { incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleIncrement = () => {
    incrementQuantity(id);
  };

  const handleDecrement = () => {
    decrementQuantity(id);
  };

  return (
    <div className="cart-item">
      <img src={imgUrl} alt={text} />
      <div className="cart-item-info">
        <p className="name">{text}</p>
        <p className="price">{price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button> 
      </div>
    </div>
  );
}

export default CartItem;
