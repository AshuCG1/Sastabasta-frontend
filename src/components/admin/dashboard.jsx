import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    
    <div className="container-fluid">
      <br></br>
      <div className="row">
        <div className="col-md-4">
          <Link to="/addproduct">
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/abstract-shopping-bag-design_1394-1084.jpg"
                alt="Add Product"
              />
              <div className="card-content">
                <h2>Add Product</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/viewcustomer">
            <div className="card">
              <img
                src="https://as2.ftcdn.net/v2/jpg/04/72/32/95/1000_F_472329551_3yd2uOzbHCkNTui4lhff4vZBs8MxwqzG.jpg"
                alt="View Customers"
              />
              <div className="card-content">
                <h2>View Customers</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/products">
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/consumer-demand-abstract-concept-illustration-customer-decision-buy-product-service-consumer-satisfaction-retail-marketing-market-price-consumption-society_335657-3327.jpg?"
                alt="Add Product Details"
              />
              <div className="card-content">
                <h2>Add Product Details</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
