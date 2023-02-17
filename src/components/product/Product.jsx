import React from 'react'
import './product.css'
import Button from '../Button'

const Product = ({product}) => {
  return (
    <div className='product '>
      <div className='product-image'>
        <img src={product.image} alt="" />
      </div>
      <h6>{product.productName}</h6>
      <p>{product.type}</p>
      <h3>{product.color}</h3>
      <h3>{product.productBrand}</h3>
      {/* <Button value="Add to Cart" href='cart'/> */}
    </div>
  )
}

export default Product