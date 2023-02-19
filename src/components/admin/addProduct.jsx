
// export default AddProduct;
import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'
import Button from "../Button";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
    type: "",
    colour: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2024/productWebsite/addProductWebsite", formData);
      console.log(response);
      alert("Product added successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
    <div className='section log'id="add-form-section">  
      <div className='logImg add-box-image' id="logoImg">
      <h3 >Add product</h3>
        <img src="https://i.pinimg.com/originals/ff/da/81/ffda81a5c2d5ff9ec4ff367e19b4dcff.png" alt="" />
      </div>
      <form action="" className='form-control' onSubmit={handleSubmit}>
        <div className=' add-bx inputFields '>
          <label htmlFor="productName"></label>
          <input type="text" className='text-field add-text' placeholder="Product Name" name="productName" onChange={handleChange} />
          <label htmlFor="productBrand"></label>
          <input type="text" className='text-field add-text' placeholder="Product Brand" name="productBrand" onChange={handleChange}/>
          <label htmlFor="type"></label>
          <select name="type" onChange={handleChange}>
            <option value="luggage">Luggage</option>
            <option value="bagpack">BagPack</option>
            <option value="wallet">Wallet</option>
            <option value="duffle">Duffle</option>
            <option value="business bag">Business Bag</option>
          </select>
          <label htmlFor="colour"></label>
          <input type="text" className='text-field add-text' placeholder="Colour" name="colour" onChange={handleChange}/>
          <label htmlFor="image"></label>
          <input type="text" className='text-field add-text' placeholder="Image Link" name="image" onChange={handleChange}/>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
      
  </>
    
  );
};

export default AddProduct;



{/* <form onSubmit={handleSubmit} className='form-control' id="add-form">
      <h1 className='login'>Add product</h1>
        <div className='inputFields'>
          <div className="add-box-demo">
            <div className="add-box-demo-input">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
            </div>
            <div>
            <label htmlFor="productBrand">Product Brand</label>
            <input
              type="text"
              name="productBrand"
              value={formData.productBrand}
              onChange={handleChange}
              required
            />
            </div>
            
          </div>

          <div className="add-box-demo">
          <label htmlFor="type">Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="luggage">Luggage</option>
          <option value="travel bag">Travel Bag</option>
          <option value="wallet">Wallet</option>
          <option value="duffle">Duffle</option>
          <option value="business bag">Business Bag</option>
        </select>
        <label htmlFor="colour">Colour</label>
        <input
          type="text"
          name="colour"
          value={formData.colour}
          onChange={handleChange}
          required
        />
          </div>
        
        
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
        </div>
       
      </form> */}