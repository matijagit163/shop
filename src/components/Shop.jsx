import React, { useContext } from 'react';
import '../css/shop.css';
import Item from '../components/Item.jsx';
import { products } from '../util/products';
import { CartContext } from '../contexts/CartContextProvider.jsx';

function Shop() {
  const { cartCount, addToCart } = useContext(CartContext);

  return (
    <div className="shop-container">

      <div className="cart-container">
        <div className="cart">
          <i className="icon fas fa-shopping-cart"></i>
          <span className="item-count">{cartCount}</span>
        </div>
      </div>

      <div className="shop-items">
        <p>Our products:</p>
        <div className="items">
          {products.map((product) => (
            <Item
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
