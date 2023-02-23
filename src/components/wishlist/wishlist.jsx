
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
               
                        
                        <button className="btn btn-outline-primary"onClick={() => {handleView(product.productId)}}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>View Details</button>
                    
                </div>
            ))}
            
        </div>
        </div>
        
    </div>
  )
}

export default Wishlist