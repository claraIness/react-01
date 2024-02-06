import React from 'react';
import { CartWidget } from '../common/CartWidget';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h3 className="navbar-brand">Logo</h3>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Todas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deportivas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Urbanas
              </a>
            </li>
          </ul>
        </div>
        <h4 className="ml-auto mr-2">Carrito</h4>
        <CartWidget />
      </div>
    </nav>
  );
};


