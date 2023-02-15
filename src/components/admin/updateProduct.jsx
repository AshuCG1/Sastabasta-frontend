import React, { useState } from "react";
import "./AddProduct.css";

const UpdateProduct = (props) => {
  const [product, setProduct] = useState({
    name: props.product.name,
    brand: props.product.brand,
    type: props.product.type,
    color: props.product.color,
    price: props.product.price,
    image: props.product.image,
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setProduct({ ...product, image: URL.createObjectURL(event.target.files[0]) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateProduct(product);
    props.toggleForm();
  };

  return (
    <form className="update-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Brand</label>
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Type</label>
        <input
          type="text"
          name="type"
          value={product.type}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Color</label>
        <input
          type="text"
          name="color"
          value={product.color}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input type="file" name="image" onChange={handleFileChange} />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
