import React from "react";
import { Link } from "react-router-dom";
import "./customerDashboard.css";
const CustomerDashboard = () => {
  
  return (
    <div className="choice-container">
    <div className="choices">
      <Link to="/type=luggage" className="choice-links">
        <div className="ch">
          <img src="https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>Luggage</h2>
        </div>
      </Link>
      <Link to="/type=duffle" className="choice-links">
        <div className="ch">
          <img src="https://images.pexels.com/photos/7578494/pexels-photo-7578494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>Duffle</h2>
        </div>
      </Link>
      <Link to="/type=business" className="choice-links">
        <div className="ch">
          <img src="https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>Business</h2>
        </div>
      </Link>
      <Link to="/type=wallet" className="choice-links">
        <div className="ch">
          <img src="https://images.pexels.com/photos/13225343/pexels-photo-13225343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>Wallets</h2>
        </div>
      </Link>
      <Link to="/type=bagpack" className="choice-links">
        <div className="ch">
          <img src="https://images.pexels.com/photos/9185876/pexels-photo-9185876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>Bagpack</h2>
        </div>
      </Link>
      <Link to="/products" className="choice-links">
        <div className="ch">
          <img src="https://images.pexels.com/photos/9540482/pexels-photo-9540482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <h2>All Types</h2>
        </div>
      </Link>
    </div>
  </div>
  );
};

export default CustomerDashboard;
