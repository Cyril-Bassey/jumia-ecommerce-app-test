import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar';
import { FcRating } from 'react-icons/fc';

const ViewDetails = () => {
  const { id } = useParams();
  console.log('Id : ', id);
  const [products, setProducts] = useState([]);
  const [SingleProduct, setSingleProduct] = useState({});
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [localResponse, externalResponse] = await Promise.all([
          fetch('http://localhost:3001/All_Products'),
          fetch('https://fakestoreapi.com/products'),
        ]);
        if (!localResponse.ok || !externalResponse.ok) {
          throw new Error('Failed to fetch data from one or both APIs');
        }
        const localProducts = await localResponse.json();
        const externalProducts = await externalResponse.json();
        const combinedProducts = [...localProducts, ...externalProducts];
        console.log(combinedProducts);
        setProducts(combinedProducts);
      } catch (error) {
        // setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      const findProduct = products.find(
        (data) => data.id === id || data.id === parseInt(id)
      );
      console.log('Received Product : ', findProduct);
      setSingleProduct(findProduct);
    }
    
  }, [products, id]);

  return (
    <div className="bg-[#F1F1F2]">
      <Navbar />
      <div className="flex flex-col lg:flex-row pt-10 px-10 gap-3">
        <div className="flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto gap-3 h-auto lg:h-[100vh] rounded-lg p-7 bg-white">
          {/* Image */}
          <div className="border w-full lg:w-[40%] h-auto lg:h-full flex items-center justify-center">
            <img
              src={SingleProduct.image}
              alt=""
              className="max-w-full max-h-full"
            />
          </div>

          <div className="border mx-3 w-full lg:w-[60%]">
            <div className="h-[10%] border-blue-800">
              <p className="bg-red-600 p-1 text-white w-[30%] text-center rounded-lg">
                Pay on delivery
              </p>
            </div>
            <div className="border-b h-[20%] mx-3">
              <p className="text-sm max-h-[70%] overflow-hidden">
                <span className="text-lg font-bold text-black">
                  {SingleProduct.name}
                </span>
              </p>
              <p className="">
                Brand: <span className="text-l">{SingleProduct.brand}</span>
              </p>
            </div>

            <div className="mx-3 h-[25%]">
              <p className="font-bold text-xl">
                ₦{' '}
                <span className="text-xl font-bold">{SingleProduct.price}</span>
              </p>
              <p className="my-3 text-sm">
                {SingleProduct.quantity === '0' ? 'Out of Stock' : 'In stock'}
              </p>
              <p className="text-sm">
                + shipping from ₦ 1,530 to LEKKI-AJAH (SANGOTEDO)
              </p>
              <p className="text-sm">
                <FcRating />
              </p>
            </div>
            <div>
              <p className="m-3 text-sm">VARIATION AVAILABLE</p>
              <span className="w-[20px] h-[20px] border border-[#F68B1E] p-2 m-3">
                Black
              </span>
              <button className="bg-[#F68B1E] w-full text-white font-bold py-2 px-4 rounded-lg mt-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center w-full lg:w-[28%] mx-auto bg-white h-auto lg:h-[100vh] rounded-lg"></div>
      </div>
      {/* Second Section */}
      <div className="flex-col">
        <div className="flex flex-col lg:flex-row p-10 gap-3 bg-[#F1F1F2]">
          <div className="flex flex-col lg:flex-col w-full lg:w-[80%] mx-auto gap-3 h-auto  rounded-lg p-7 bg-white ">
            <p className="border-b w-full text-xl font-bold">Product Details</p>
            {/* Description */}
            <div className="border w-full lg:w-[100%] h-auto lg:h-full flex items-center justify-center">
              <img src={SingleProduct.image} alt="" />
            </div>
            <div className="border w-full lg:w-[100%] h-auto lg:h-full flex items-center justify-center">
              <p>{SingleProduct.description}</p>
            </div>

            <p className="font-bold text-2xl">Specifications</p>
            <div className="border w-full lg:w-[100%] h-auto lg:h-full flex items-center justify-center">
              {/* <img src={SingleProduct} alt="" /> */}
            </div>
            <div className="border w-full lg:w-[100%] h-auto lg:h-full flex items-center justify-center">
              {/* <p>{SingleProduct}</p> */}
            </div>
          </div>

          {/* Additional Information */}
          <div className="sticky h-[10%] top-0 mx-auto flex flex-col gap-4 lg:w-[28%] rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full lg:w-[100%] mx-auto bg-white h-auto lg:h-[35vh] rounded-lg"></div>
            <div className="sticky grid md:grid-cols-2 gap-8 items-center w-full lg:w-[100%] mx-auto bg-white h-auto lg:h-[35vh] rounded-lg"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center w-full lg:w-[100%] mx-auto bg-white h-auto lg:h-[25vh] rounded-lg"></div>
          </div>
        </div>
      </div>{' '}
      {/* Render more details of the product */}
    </div>
  );
};

export default ViewDetails;
