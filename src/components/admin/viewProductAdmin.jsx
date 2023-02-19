import Button from "../Button"
import "../customer/viewProduct"
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'



const ViewProductAdmin = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[3];
    console.log(path)
    const [image, setImage] = useState([]);
    const url = `http://localhost:2024/productWebsite/editProductWebsite/${path}`;
    const [formData, setFormData] = useState({

        amazonLink: "",
        amazonRating: "",
        amazonPrice: "",
        amazonDiscount: "",
        flipcartLink: "",
        flipcartRating: "",
        flipcartPrice: "",
        flipcartDiscount: "",
        myntraLink: "",
        myntraRating: "",
        myntraPrice: "",
        myntraDiscount: ""
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
            const response = await axios.put(url, formData);
            console.log(response);
            alert("Product updated")
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchImage = async () => {
            const res = await axios.get(`http://localhost:2024/product/getProduct/${path}`, {})
            //console.log(res.data)
            setImage(res.data.image)
            console.log(res.data.image)
        }
        fetchImage()
    }, [])

    return (
        <div className="cust-view">
            <div className="cust-product">
                <img src={image} alt="" />            </div>
            <div className="product-box">
                <h4>Amazon</h4>
                <form action="" >
                    <label htmlFor="amazonLink"></label>
                    <input type="text" placeholder=" Link" name="amazonLink" onChange={handleChange} />
                    <label htmlFor="amazonRating"></label>
                    <input type="text" placeholder=" Rating" name="amazonRating" onChange={handleChange} />
                    <label htmlFor="amazonDiscount"></label>
                    <input type="text" placeholder=" Discount" name="amazonDiscount" onChange={handleChange} />
                    <label htmlFor="amazonPrice"></label>
                    <input type="text" placeholder=" Price" name="amazonPrice" onChange={handleChange} />
                </form>
            </div>
            <div className="product-box">
                <h4>Myntra</h4>
                <form action="">
                    <input type="text" placeholder=" Link" name="myntraLink" onChange={handleChange} />
                    <label htmlFor="myntraRating"></label>
                    <input type="text" placeholder=" Rating" name="myntraRating" onChange={handleChange} />
                    <label htmlFor="myntraDiscount"></label>
                    <input type="text" placeholder=" Discount" name="myntraDiscount" onChange={handleChange} />
                    <label htmlFor="myntraPrice"></label>
                    <input type="text" placeholder=" Price" name="myntraPrice" onChange={handleChange} />
                </form>
            </div>
            <div className="product-box">
                <h4>Flipkart</h4>
                <form action="">
                    <input type="text" placeholder=" Link" name="flipcartLink" onChange={handleChange} />
                    <label htmlFor="flipcartRating"></label>
                    <input type="text" placeholder=" Rating" name="flipcartRating" onChange={handleChange} />
                    <label htmlFor="flipcartDiscount"></label>
                    <input type="text" placeholder=" Discount" name="flipcartDiscount" onChange={handleChange} />
                    <label htmlFor="flipcartPrice"></label>
                    <input type="text" placeholder=" Price" name="flipcartPrice" onChange={handleChange} />
                </form>
            </div>
            <button onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default ViewProductAdmin
