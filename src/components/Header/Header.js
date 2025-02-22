import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/lista">Lista</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
