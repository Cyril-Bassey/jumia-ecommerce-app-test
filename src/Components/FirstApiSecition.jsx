import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FirstApiSection = () => {
  const truncateText = (text, charLimit) => {
    if (text.length <= charLimit) {
      return text;
    }
    return text.slice(0, charLimit) + '...';
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="bg-[#F1F1F2] p-4 md:p-12">
      <div className="bg-blue-500 pt-10 rounded-t-lg flex justify-center items-center">
        <h1 className="text-2xl text-white">Top Phone Deals</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white p-4 rounded-b-lg">
        {products.map((data) => (
          <div
            key={data.id}
            className="border p-5 rounded-lg h-fit shadow-lg hover:shadow-none hover:border-green-600"
          >
            <Link to={`/productdetails/${data.id}`}>
              <div className="w-full h-[200px] flex justify-center items-center">
                <img className="w-full h-full object-contain max-w-[150px]" src={data.image} alt="" />
              </div>
              <div className="mt-2">
                <h1 className="text-left font-bold text-l">{data.category}</h1>
                <h1 className="text-sm">{truncateText(data.title, 20)}</h1>
                <p className="text-sm">₦ {data.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstApiSection;