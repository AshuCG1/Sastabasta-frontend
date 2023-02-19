// import React, { useState } from "react";
// import "./AddProduct.css";
// import Axios from "axios";

// const AddProduct = () => {
//   const url = "http://localhost:2024/product/addproduct";

//   const [product, setProduct] = useState({
//     productName: "",
//     productBrand: "",
//     type: "",
//     colour: "",
//     image: "",
//   });

//   const handleChange = (event) => {
//     setProduct({ ...product, [event.target.productName]: event.target.value });
//   };

//   // const handleImageChange = (event) => {
//   //   setProduct({ ...product, image: URL.createObjectURL(event.target.files[0]) });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(product);
//     Axios.post(url, {
//       // customerId: values.customerId,
//     productName: event.productName,
//     productBrand: event.productBrand,
//     type: event.type,
//     colour: event.colour,
//     image: event.image
//   }).then((res) => {
//     alert("Added Success");
    
//   });
//   };

//   return (
//     <form className="add-product-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="productName">Product Name:</label>
//         <input
//           type="text"
//           name="productName"
//           value={product.productName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="productBrand">productBrand:</label>
//         <input
//           type="text"
//           name="productBrand"
//           value={product.productBrand}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="type">Type:</label>
//         <input
//           type="text"
//           name="type"
//           value={product.type}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="colour">colour:</label>
//         <input
//           type="text"
//           name="colour"
//           value={product.colour}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="image">Image Link:</label>
//         <input
//           type="text"
//           name="image"
//           value ={product.image}
//           // accept="image/*"
//           // onChange={handleImageChange}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { images } from '../../constants/index'
import { Link } from 'react-router-dom'
import Button from "../Button";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
    type: "",
    colour: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2024/product/addProduct", formData);
      console.log(response);
      alert("Product added successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className='section log'id="add-form-section">  
      <div className='logImg' id="logoImg">
        <img src="https://i.pinimg.com/originals/ff/da/81/ffda81a5c2d5ff9ec4ff367e19b4dcff.png" alt="" />
      </div>
      <form onSubmit={handleSubmit} className='form-control' id="add-form">
      <h1 className='login'>Add product</h1>
        <div className='inputFields'>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <label htmlFor="productBrand">Product Brand</label>
        <input
          type="text"
          name="productBrand"
          value={formData.productBrand}
          onChange={handleChange}
          required
        />
        <label htmlFor="type">Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="luggage">Luggage</option>
          <option value="travel bag">Travel Bag</option>
          <option value="wallet">Wallet</option>
          <option value="duffle">Duffle</option>
          <option value="business bag">Business Bag</option>
        </select>
        <label htmlFor="colour">Colour</label>
        <input
          type="text"
          name="colour"
          value={formData.colour}
          onChange={handleChange}
          required
        />
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
        </div>
       
      </form>
    </div>
      
  </>
    
  );
};

export default AddProduct;

{/* <div className="add-product-container">
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <label htmlFor="productBrand">Product Brand</label>
        <input
          type="text"
          name="productBrand"
          value={formData.productBrand}
          onChange={handleChange}
          required
        />
        <label htmlFor="type">Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="luggage">Luggage</option>
          <option value="travel bag">Travel Bag</option>
          <option value="wallet">Wallet</option>
          <option value="duffle">Duffle</option>
          <option value="business bag">Business Bag</option>
        </select>
        <label htmlFor="colour">Colour</label>
        <input
          type="text"
          name="colour"
          value={formData.colour}
          onChange={handleChange}
          required
        />
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div> */}