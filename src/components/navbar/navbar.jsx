import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="">BagsRUs</div>
            <ul>
            <li>   <Link className='logo' to='/'><i class="fa-solid fa-bag-shopping" style={{ color: "#333", fontSize: '30px' }}><span className='span'>Home</span></i></Link></li> 
             <li>  <Link to='/wishlist'></Link></li> 

            </ul>
        </nav>
    );
}

export default Navbar;
