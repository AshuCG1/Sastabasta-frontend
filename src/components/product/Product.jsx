import React from 'react'
import './product.css'
import Button from '../Button'

const Product = ({product}) => {
  return (
    <div className='product '>
      <div className='product-image'>
        <img src={product.image} alt="" />
      </div>
      <h6>{product.name}</h6>
      <p>{product.description}</p>
      <h3>{`Rs. ${product.price}`}</h3>
      {/* <Button value="Add to Cart" href='cart'/> */}
    </div>
  )
}

export default Product