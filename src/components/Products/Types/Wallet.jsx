import "../products.css"
import Product from "./product/Product"
import React, { useState, useEffect } from "react";

const Wallet = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2024/product/filter?type=wallet")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            console.log(data);
        })
        .catch(error => { console.error(error); });
    }, []);
    return (
         <div className='section prdct'>
            <h1 className='heading'>Wallets</h1>
            <div className='all-products p2'>
                {products.map((product) =>
                    <Product product={product} />
                )}
            </div>
        </div> 
    )
};
export default Wallet
