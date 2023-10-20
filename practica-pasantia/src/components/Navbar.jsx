import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-4">
       <div className="container-fluid d-flex">
            <a className="navbar-brand" href="#">
            Logo
            </a>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">
                Inicio
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/productos" className="nav-link" href="#">
                Productos
                </Link>
            </li>
            <li className="nav-item dropdown">
                <Link to="/inventario"  className="nav-link" href="#">
                Inventario
                </Link>
            </li>
            </ul>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
            </form>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
