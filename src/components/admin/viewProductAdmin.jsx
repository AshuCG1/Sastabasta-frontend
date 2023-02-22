import Button from "../Button"
import "../customer/viewProduct"
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react'



const ViewProductAdmin = () => {

    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const webPath = location.pathname.split("/")[4];
    console.log(path)
    const [image, setImage] = useState([]);

    // for testing purposes
    // const [linkCheck, setLinkCheck] = useState('');
    // const [ratingCheck, setRatingCheck] = useState('');
    // const [priceCheck, setPriceCheck] = useState('');
    // const [discountCheck, setDiscountCheck] = useState('');

    // const isLinkValid = (link) => {
    //     const linkRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return linkRegex.test(link);
    // };

    // const isRatingValid = (rating) => {
    //     const ratingRegex = "";
    //     return ratingRegex.test(rating);
    // };
    // const isPriceValid = (price) => {
    //     const priceRegex = "";
    //     return priceRegex.test(price);
    // };
    // const isDiscountValid = (discount) => {
    //     const discountRegex = "";
    //     return discountRegex.test(discount);
    // };



    const url = `http://localhost:2024/productWebsite/editProductWebsite/${path}/${webPath}`;
    const putUrl = `http://localhost:2024/productWebsite/editProductWebsite/${path}`;
    const [formData, setFormData] = useState({

        webId: webPath,
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
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="brandLogo" alt="" />
                <h5 className="brandName">Amazon</h5>
                </div>
                <form action="" >
                    <label htmlFor="amazonLink"></label>
                    <input type="text" placeholder=" Link" name="amazonLink"  required onChange={handleChange} />
                   

                    <label htmlFor="amazonRating"></label>
                    <input type="text" placeholder=" Rating" name="amazonRating"  required onChange={handleChange} />


                    <label htmlFor="amazonDiscount"></label>
                    <input type="text" placeholder=" Discount" name="amazonDiscount"  required onChange={handleChange} />


                    <label htmlFor="amazonPrice"></label>
                    <input type="text" placeholder=" Price" name="amazonPrice"  required onChange={handleChange} />
                </form>
            </div>
            <div className="product-box">
            <div><img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" className="brandLogo" alt="" />
                <h5 className="brandName">Flipkart</h5>
                </div>
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
            <div><img src="https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png" className="brandLogo" alt="" />
                <h5 className="brandName">Myntra</h5>
                </div>
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
            <button className="btn btn-primary" onClick={handleSubmit}>Update</button>
        </div>
    )
}

export default ViewProductAdmin
