import React from 'react';
import { Carousel } from 'antd';

const Hero = () => {
    // const []
  return (
   <div className="lg:min-h-[80vh] w-full bg-[#F1F1F2] p-2 ">
  {/* Side Category Menu */}
  <div className="flex flex-col sm:flex-row w-full h-full justify-around px-4 py-4  rounded-lg gap-2">
    <div className="bg-white border rounded-lg mb-4 sm:h-[30vh] sm:w-[20%] lg:h-[67vh] lg:w-[200px]">
      <ul>
        <li className='sm:text-sm'>Supermarket</li>
        <li className='sm:text-sm'>Home and Market</li>
      </ul>
    </div>

    {/* Center image carousel */}
    <div className="lg:h-[67vh] w-full lg:w-[60%] sm:w-[80%] sm:h-[30vh]  bg-white border rounded-lg">
      <Carousel autoplay arrows infinite={false}>
        <div className='w-[100%] h-[100%] flex justify-center items-center align-middle'>
          <img
            className="rounded-md object-cover w-full h-full"
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week28_global/712x384.png"
            alt=""
          />
        </div>
        <div className='w-full h-full'>
          <img
            className="rounded-md object-cover w-full h-full"
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1Advertising/JULY/ADI_FSH_WEEK_712x384.jpg"
            alt=""
          />
        </div>
        <div className='w-full h-full'>
          <img
            className="rounded-md object-cover w-full h-full"
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-30/Beauty-bargain/712x384.jpg"
            alt=""
          />
        </div>
        <div className='w-full h-full'>
          <img
            className="rounded-md object-cover w-full h-full"
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/tecno/TECNO_Desktop_Homepage_Slider__712x384.jpg"
            alt=""
          />
        </div>
      </Carousel>
        </div>

        {/* Last section right */}
        <div className="flex flex-col ">
          <div className="h-[32.5vh] w-[200px] bg-white border rounded-lg lg:block hidden">
            <div className="flex justify-start items-center p-4">
              <span>Icon</span>
              <div>
                <h1>Call to Order</h1>
                <h1>08104100335</h1>
              </div>
            </div>
            <div className="flex justify-start items-center p-4">
              <span>Icon</span>
              <div>
                <h1>Call to Order</h1>
                <h1>08104100335</h1>
              </div>
            </div>
            <div className="flex justify-start items-center p-4">
              <span>Icon</span>
              <div>
                <h1>Call to Order</h1>
                <h1>08104100335</h1>
              </div>
            </div>
          </div>
          <div className="lg:h-[32.5vh] lg:w-[200px] bg-white border mt-3 rounded-lg hidden lg:block ">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/shop_earn.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Hero;
