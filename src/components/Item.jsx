import React, { useContext } from 'react';
import '../css/item.css';
import { CartContext } from '../contexts/CartContextProvider';

function Item({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={product.imgUrl} alt={product.text} />
        <div className="card-content">
          <p>{product.text}</p>
          <p className="price">{product.price}</p>
          <a href="#" className="btn" type="button" onClick={handleAddToCart}>
            dodaj u korpu
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
