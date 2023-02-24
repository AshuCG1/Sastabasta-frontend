import Button from "../Button"
import "./AddProduct.css"
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'

const UpdateProduct = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const putUrl = `http://localhost:2024/product/editProduct`;

    // const webPath = location.pathname.split("/")[4];
    console.log(path)
    const [image, setImage] = useState([]);

    const [formData, setFormData] = useState({
        productId: path,
        productName: "",
        productBrand: "",
        type: "",
        colour: "",
        image: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
        try {
            const response = await axios.put(putUrl, formData);
            console.log(response);
            alert("Product updated")
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchImage = async () => {
            const res = await axios.get(`http://localhost:2024/product/getProduct/${path}`, {})
            setImage(res.data.image)
            console.log(res.data.image)
        }
        fetchImage()
    }, [])

    return (
        <>
        
        <div className='section log'id="add-form-section">  
          <div className='logImg add-box-image' id="logoImg">
          <h3 >Update Product</h3>
            <img src={image} alt="" />
          </div>
          <form action="" className='form-control' onSubmit={handleSubmit}>
            <div className=' add-bx inputFields '>
              <label htmlFor="productName"></label>
              <input type="text" className='text-field add-text' placeholder="Product Name" name="productName" onChange={handleChange} />
              <label htmlFor="productBrand"></label>
              <input type="text" className='text-field add-text' placeholder="Product Brand" name="productBrand" onChange={handleChange}/>
              <label htmlFor="type"></label>
              <select name="type" onChange={handleChange}>
                <option value="">Select Type</option>
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
            <button type="submit">Update</button>
          </form>
        </div>
          
      </>
        
      );



};
export default UpdateProduct