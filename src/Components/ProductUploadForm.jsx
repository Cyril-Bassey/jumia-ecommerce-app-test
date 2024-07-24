import React, { useState } from 'react';
import Navbar from './NavBar';

const ProductUploadForm = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const endpoint = 'http://localhost:3001/All_Products';
    const payload = {
    //   id: products.length + 1,
      name: productName,
      brand: productBrand,
      quantity: productQuantity,
      price: productPrice,
      category: productCategory,
      description: productDescription,
      image: productImage,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newProduct = await response.json();
        setProducts([...products, newProduct]);

        alert('Product saved successfully!');
        //Sets the form fields to empty after submission
        setProductName('');
        setProductBrand('');
        setProductQuantity('');
        setProductPrice('');
        setProductCategory('');
        setProductDescription('');
        setProductImage('');

        // window.location.reload();
      } else {
        alert('Failed to save product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the product.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-pink-200 w-1/2 mx-auto my-6 p-4 rounded-2xl">
        <h2 id="addProd" className="text-center text-2xl text-cyan-950 ">
          Products Upload
        </h2>
        <input
          type="text"
          id="ProductName"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product Name "
        />

        <input
          type="text"
          id="ProductBrand"
          onChange={(e) => setProductBrand(e.target.value)}
          value={productBrand}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product Brand"
        />

        <input
          type="number"
          id="ProductQuantity"
          onChange={(e) => setProductQuantity(e.target.value)}
          value={productQuantity}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product Quantity Here"
        />

        <input
          type="number"
          id="ProductPrice"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product Price Here"
        />

        <input
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product category"
        />

        <input
          type="textarea"
          id="productDescription"
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product Description Here"
        />

        <input
          type="url"
          id="productImage"
          onChange={(e) => setProductImage(e.target.value)}
          value={productImage}
          className=" my-3 w-full p-2 rounded-md"
          placeholder="Enter Product Image Here (Link only)"
        />

        <button
          id="updateForm"
          onClick={handleAddProduct}
          className="btn btn-alert w-100 mx-auto w-full p-2 rounded-md bg-blue-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductUploadForm;
