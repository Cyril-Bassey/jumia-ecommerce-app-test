import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/reset.css'; // Import Ant Design styles

const images = [
  'https://www.jumia.com.ng/mlp-samsung-store/?=Slide+1',
  'https://www.jumia.com.ng/mlp-step-up-your-style//?=Slide+2',
  'https://www.jumia.com.ng/mlp-step-up-your-style/?=Slide+3',
];

const CarouselComponent = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        autoplay
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
