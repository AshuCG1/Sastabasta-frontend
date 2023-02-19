
import Button from '../Button'
import './wishlist.css'
import React, { useState, useEffect } from "react";


    // const totalP = (products.map( p => p.price ).reduce( (pr, total) => { return total += pr},0));
    const Wishlist = () => {
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch(error => { console.error(error); });
        }, []);

  return (
    <div className='section'>
        <div className='cart-block'> 
            <h1>Your Wish List</h1>
            <div className='overflow p2'>
            { products.map((p) => (
                <div className='cart-product'>
                    <img src={p.image} alt="" />
                    <div style={{ marginLeft: '40px'}} className='data'>
                        <h4>Wallet</h4>
                        <p>Fastrack</p>       
                        <p>Color</p>       
                    </div>
                        <p>####</p>
                    <Button value="Buy" />
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