import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/add">Ajouter un Post</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
