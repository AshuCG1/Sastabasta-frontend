import React, { useState } from "react";
import "./AddProduct.css";
import Axios from "axios";

const AddProduct = () => {
  const url = "http://localhost:2024/product/addproduct";

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    type: "",
    color: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    setProduct({ ...product, image: URL.createObjectURL(event.target.files[0]) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
    Axios.post(url, {
      // customerId: values.customerId,
    productName: event.name,
    productBrand: event.brand,
    type: event.type,
    colur: event.color,
    image: event.image
  }).then((res) => {
    alert("Added Success");
    window.location.href = 'http://localhost:3002/'
  });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          name="type"
          value={product.type}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
