import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Bagos</Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/admin-login">Admin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/customer-login">Customer</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
