import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { AdminLogout } from "../../actions";
import { CustomerLogout } from "../../actions";
import { useDispatch } from "react-redux";

function Navbar() {

  const admin = useSelector((state) => state.AdminReducer);
  const customer = useSelector((state) => state.CustomerReducer);
  console.log(admin)
  console.log(customer)

  const dispatch = useDispatch();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">SastaBasta</Link>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link class="nav-link active" to="/">Home
                <span class="visually-hidden">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            {admin.admin != null || customer.customer != null ?
              <li class="nav-item">{admin.admin != null ? <button onClick={() => dispatch(AdminLogout()).then(window.location.replace('/admin-login'))} style={{ background: 'none', color: 'white', border: 'none', outline: 'none', marginTop: '7px', marginLeft: '5px' }}>Logout</button> : <button onClick={() => dispatch(CustomerLogout()).then(window.location.replace('/login'))} style={{ background: 'none', color: 'white', border: 'none', outline: 'none', marginTop: '7px', marginLeft: '5px' }}>Logout</button>}
              </li> : ''
            }
            {admin.admin == null && customer.customer != null ?
              <li class="nav-item">{customer.customer != null ? <Link class="nav-link" to="/wishlist">Wishlist</Link> : <button ></button>}
              </li> : ''
            }
            {/* {admin.admin == null && customer.customer == null ?
              <li class="nav-item">{customer.customer != null ? <Link class="nav-link" to="/updateCustomer/">Update Profile</Link> : <button ></button>}
              </li> : ''
            } */}


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
