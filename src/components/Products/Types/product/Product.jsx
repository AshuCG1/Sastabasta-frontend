// import React from 'react'
// import './product.css'
// import Button from '../../../Button'

// const Product = ({product}) => {
//   return (
//     <div className='product '>
//       <div className='product-image'>
//         <img src={product.image} alt="" />
//       </div>
//       <div className='prdt-detail'>
//         <h5>{product.productName}</h5>
//         <h6><span style={{ fontSize: '12px'}}>Brand</span> : {product.productBrand}</h6>
//         <h6><span style={{ fontSize: '12px'}}>Type</span> : {product.type}</h6>
//         <h6><span style={{ fontSize: '12px'}}>Color</span> : {product.colour}</h6>
//         <div className='btn-links'>
//           <Button value="View"/>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
//   <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
// </svg>
//         </div>
//       </div>
      
//     </div> 
    
//   )
// }

// export default Product
import React from 'react'
import './product.css'
import Button from '../../../Button'
import { useSelector } from 'react-redux'

const Product = (product) => {

  const customer = useSelector((state) => state.CustomerReducer);
  console.log(customer.customer)


  // console.log(`http://localhost:2024/product/getProduct/${product.product.productId}`)
  const handleCart =  () => {
    const linkProduct =  `http://localhost:3000/product/getProductDetailsById/${product.productId}`
    window.location.replace(linkProduct)
  }
  const handleEdit =  () => {
    const linkProduct =  `http://localhost:3000/product/viewProductAdminById/${product.productId}`
    window.location.replace(linkProduct)
  }

  return (
    <div className='product '>
      <div className='product-image'>
        <img src={product.image} alt="" />
      </div>
      <div className='prdt-detail'>
        <h5>{product.product.productName}</h5>
        <h6><span style={{ fontSize: '12px'}}>Brand</span> : {product.productBrand}</h6>
        <h6><span style={{ fontSize: '12px'}}>Type</span> : {product.type}</h6>
        <h6><span style={{ fontSize: '12px'}}>Color</span> : {product.colour}</h6>
        <div className='btn-links'>
          { customer.customer !== null ? <button  onClick={handleCart}>View</button> : <button  onClick={handleEdit}>Edit</button> }
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>
        </div>
      </div>
      
    </div> 
    
  )
}

export default Product




