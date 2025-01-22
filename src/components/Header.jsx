import '../css/header.css'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="/shop">SHOP</Link>
        <Link to="/" className="home">HOME</Link>
        <Link to="/cart">CART</Link>
      </nav>
    </div>
  );
}

export default Header