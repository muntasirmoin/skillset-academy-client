import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'daisyui/dist/full.css';


const TopSlider = () => {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        className="mt-8"
      >
        <div className="bg-blue-500 text-white">
          {/* <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 1" className="mx-auto mt-4" /> */}
          <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Slider 1</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="bg-red-500 text-white">
        <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 2" className="mx-auto h-64 w-64 object-contain pt-4" />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Slider 2</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="bg-green-500 text-white">
        <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 3" className="mx-auto h-64 w-64 object-contain pt-4" />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Slider 3</h2>
            <p className="text-lg sm:text-xl md:text-2xl">Sed do eiusmod tempor incididunt</p>
          </div>
        </div>
      </Carousel>
    );
  };
  
  export default TopSlider;