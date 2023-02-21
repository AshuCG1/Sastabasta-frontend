
import Button from '../Button'
import './wishlist.css'
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'


    const Wishlist = () => {
        const customer = useSelector((state) => state.CustomerReducer);
       
        console.log(customer.customer.payload.custId)
        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:2024/wishlist/getAllProducts/${customer.customer.payload.custId}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch(error => { console.error(error); });
        }, []);
        const handleView =  (e) => {
            const linkProduct =  `http://localhost:3000/product/getProductDetailsById/${e}`
            console.log(linkProduct)
            window.location.replace(linkProduct)
          }

  return (
    <div className='section'>
        <div className='cart-block'> 
            <h1>Your Wish List</h1>
            <div className='overflow p2'>
            { products.map((product) => (
                <div className='cart-product'>
                    <img src={product.image} alt="" />
                    <div style={{ marginLeft: '40px'}} className='data'>
                        <h4> {product.productName} </h4>
                        <p>Type: {product.type} </p>
                        <p>Brand :{product.productBrand}</p>       
                        <p>Color :{product.colour}</p>       
                    </div>
                        {/* <p>Rating :{product.amazonRating}</p> */}
                        
                        <button onClick={() => {handleView(product.productId)}}>View</button>
                    {/* <Button value="Remove"/> */}
                </div>
            ))}
            
        </div>
        </div>
        {/* <div className='order'>
            <h1>Order Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Bag Total</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                    
                </div>
                <div className='total'>
                    <p>Delivery</p>
                    <p>FREE</p>
                </div>
                <div className='total final'>
                    <p>Total Amount</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                </div>
            </div>  
            <Button value="Checkout" href="" />
        </div> */}
    </div>
  )
}

export default Wishlist