import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-4">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src={Logo} id='logo' alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" id='inicio' aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inventario" id='inventario' className="nav-link">
                Inventario
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/productos" id='productos' class="nav-link">
                Productos
            </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
