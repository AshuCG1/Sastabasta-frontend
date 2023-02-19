import  Button  from "../Button"
import "./viewProduct.css"
// import { useSelector } from 'react-redux'
// import { Navigate, useLocation } from 'react-router'
import React, { useState, useEffect} from 'react'
import { Link, Redirect } from "react-router-dom"
import axios from 'axios'
import { useLocation } from "react-router-dom"


const ViewProduct = () => {

    const location = useLocation();
  const path = location.pathname.split("/")[3];
  console.log(path)
   
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState([]);

    // const [error, setError] = useState(false);
    // const customer = useSelector((state) => state.CustomerReducer);

    // useEffect(() => {
    //     fetch("http://localhost:2024/product/getProductDetailsById/2")
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //         console.log(data.product.image);
    //     })
    //     .catch(error => { console.error(error); });
    // }, []);

    useEffect(() => {
        const fetchProduct = async () => {
        const res = await axios.get(`http://localhost:2024/product/getProductDetailsById/${path}`, {})
        //console.log(res.data)
        setProducts(res.data)
        console.log(res.data)
        }
        fetchProduct()
    },[])

    useEffect(() => {
        const fetchImage = async () => {
        const res = await axios.get(`http://localhost:2024/product/getProduct/${path}`, {})
        //console.log(res.data)
        setImage(res.data.image)
        console.log(res.data.image)
        }
        fetchImage()
    },[])

    const redirectToWeb= (e) =>{
        window.location.replace(e)
    }

    return(
        <div className="cust-view">
            <div className="cust-product">
                <img src={image} alt="" />
            </div>
            <div className="product-box">
                <h4>Amazon</h4>
                <ul>
                    <hr />
                    <li>Price :{products.amazonPrice}</li>
                    <li>Discount :{products.amazonDiscount}</li>
                    <li>Rating : {products.amazonRating}</li>
                    <hr />
                 
                    <button onClick={() => {redirectToWeb(products.amazonLink)}}>Buy Now</button>
                </ul>
            </div>
            <div className="product-box">
                <h4>FlipKart</h4>
                <ul>
                    <hr />
                    <li>Price : {products.flipcartPrice}</li>
                    <li>Discount : {products.flipcartDiscount}</li>
                    <li>Rating : {products.flipcartRating}</li>
                    <hr />
                  
                    <button onClick={() => {redirectToWeb(products.flipcartLink)}}>Buy Now</button>
                </ul>
            </div>
            <div className="product-box">
                <h4>Myntra</h4>
                <ul>
                    <hr />
                    <li>Price :{products.myntraPrice}</li>
                    <li>Discount :{products.myntraDiscount}</li>
                    <li>Rating :{products.myntraRating}</li>
                    <hr />
                 
                    <button onClick={() => {redirectToWeb(products.myntraLink)}}>Buy Now</button>
                </ul>
            </div>
        </div>
    )
}

export default ViewProduct
