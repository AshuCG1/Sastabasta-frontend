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
  
  const updater=(e)=>{
    console.log(customer)
    const linkProduct =  `http://localhost:3000/updatecustomer/${e}`
    window.location.replace(linkProduct)
  }
  console.log(admin)
  console.log(customer)

  const dispatch = useDispatch();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
       <div className="brand">
        SastaBasta
       </div>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
           
          {admin.admin == null && customer.customer == null ?
              <li class="nav-item">{customer.customer == null ? <Link class="nav-link" to="/register">Register</Link> : <button >Hello</button>}
              </li> : ''
            }
            
            {/* login nav */}
            {admin.admin == null && customer.customer == null ?
              <li class="nav-item">{customer.customer == null ? <Link class="nav-link" to="/login">Login</Link> : <button >Hello</button>}
              </li> : ''
            }
            
            {/* admin dashboard link */}
            {admin.admin != null && customer.customer == null ?
              <li class="nav-item">{admin.admin != null ? <Link class="nav-link" to="/adminDash">Dashboard</Link> : <button >Hello</button>}
              </li> : ''
            }

            {/* customer dashboard nav */}
            {admin.admin == null && customer.customer != null ?
              <li class="nav-item">{customer.customer != null ? <Link class="nav-link" to="/customerDash">Dashboard</Link> : <button >Hello</button>}
              </li> : ''
            }

            {admin.admin != null || customer.customer != null ?
              <li class="nav-item">
                {admin.admin != null ? <button onClick={() => dispatch(AdminLogout())
                  .then(window.location.replace('/admin-login'))} 
                  style={{ background: 'none', color: 'white', border: 'none', outline: 'none', marginTop: '7px', marginLeft: '5px' }}>Logout</button> : <button onClick={() => dispatch(CustomerLogout()).then(window.location.replace('/login'))} style={{ background: 'none', color: 'white', border: 'none', outline: 'none', marginTop: '7px', marginLeft: '5px' }}>Logout</button>}
              </li> : ''
            }
            {admin.admin == null && customer.customer != null ?
              <li class="nav-item">{customer.customer != null ? <Link class="nav-link" to="/wishlist">Wishlist</Link> : <button ></button>}
              </li> : ''
            }
            {admin.admin == null && customer.customer != null ?
              <li class="nav-item">{customer.customer != null ? <button onClick={() => {updater(customer.customer.payload.custId)}} style={{ background: 'none', color: 'white', border: 'none', outline: 'none', marginTop: '7px', marginLeft: '5px' }}>Update Profile</button> : <button >Hello</button>}
              </li> : ''
            }


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
