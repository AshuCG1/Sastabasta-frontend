import React from 'react'
import './product.css'
import Button from '../Button'
import { useSelector } from 'react-redux'
import Axios from 'axios'

const Product = ({product}) => {

  const customer = useSelector((state) => state.CustomerReducer);
  console.log(customer.customer)



  const handleCart =  () => {
    const linkProduct =  `http://localhost:3000/product/getProductDetailsById/${product.product.productId}`
    window.location.replace(linkProduct)
  }
  const handleEdit =  () => {
    const linkProduct =  `http://localhost:3000/product/viewProductAdminById/${product.product.productId}/${product.webId}`
    console.log(linkProduct)
    window.location.replace(linkProduct)
  }
  const handleUpdate =  () => {
    const linkProduct =  `http://localhost:3000/product/updateProduct/${product.product.productId}`
    console.log(linkProduct)
    window.location.replace(linkProduct)
  }
  const addToCart =  () => {

    Axios.get(`http://localhost:2024/wishlist/getWishlist/${customer.customer.payload.custId}`).then((res)=>{ 
 
      const cartLink =  `http://localhost:2024/product/${product.product.productId}/addWishlist/${res.data.wishlistId}`;
      Axios.put(cartLink, {}).then((res)=>{ 
        console.log(res)  
        alert("Product Added to wishlist Successfully")
     });
    });
    
  }

  return (
    <div className='product '>
      <div className='product-image'>
        <img src={product.product.image} alt="" />
      </div>
      <div className='prdt-detail'>
        <h5>{product.product.productName}</h5>
        <h6><span style={{ fontSize: '12px'}}>Brand</span> : {product.product.productBrand}</h6>
        <h6><span style={{ fontSize: '12px'}}>Type</span> : {product.product.type}</h6>
        <h6><span style={{ fontSize: '12px'}}>Color</span> : {product.product.colour}</h6>
        <div className='btn-links'>
          { customer.customer !== null ? <><button className="btn btn-outline-danger" onClick={handleCart}>View</button> <button className="btn btn-outline-success btn-sm" onClick={addToCart}>Wishlist<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg></button></>: <><button className="btn btn-outline-warning"  onClick={handleEdit}>Add Details</button> <button className="btn btn-outline-danger"  onClick={handleUpdate}>Edit</button></>   }
        
        
          
          
        </div>
      </div>
      
    </div> 
    
  )
}

export default Product


