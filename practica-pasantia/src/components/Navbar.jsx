import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-4">
       <div className="container-fluid d-flex">
            <a className="navbar-brand" href="#">
            Mis Productos App
            </a>
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                Inicio
                </Link>
            </li>
            <li className="nav-item dropdown">
                <Link to="/inventario"  className="nav-link" href="#">
                Inventario
                </Link>
            </li>
            </ul>
        </div>
    </nav>
</>
  );
};

export default Navbar;
