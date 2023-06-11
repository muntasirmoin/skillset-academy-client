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
        className="mt-2 mb-2 pb-2 pt-2"
      >
        <div className="bg-blue-500 text-white">
          {/* <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 1" className="mx-auto mt-4" /> */}
          <img src="https://i.ibb.co/vmTBJFB/sven-kucinic-Z0-Kjmjx-Us-Ks-unsplash.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Football</h2>
            <p className="text-lg p-2 sm:text-xl md:text-2xl mb-2">Football offers an opportunity for players to develop and refine various skills. </p>
          </div>
        </div>
        <div className="bg-red-500 text-white">
        <img src="https://i.ibb.co/4PfY9yW/anastase-maragos-KRAupy-FU-u-I-unsplash.jpg" alt="Slide 2" className="mx-auto h-64 w-64 object-contain pt-4" />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Dart board</h2>
            <p className="text-lg p-2 sm:text-xl md:text-2xl">Players need to block out distractions and maintain focus on their throws</p>
          </div>
        </div>
        <div className="bg-green-500 text-white">
        <img src="https://i.ibb.co/ydBLmkF/courtney-cook-Ss-IIw-MET0-E-unsplash.jpg" alt="Slide 3" className="mx-auto h-64 w-64 object-contain pt-4" />
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl">Golf</h2>
            <p className="text-lg p-2 sm:text-xl md:text-2xl">It's demands excellent hand-eye coordination.</p>
          </div>
        </div>
      </Carousel>
    );
  };
  
  export default TopSlider;