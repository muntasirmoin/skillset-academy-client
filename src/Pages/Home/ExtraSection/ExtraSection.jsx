import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

const ExtraSection = () => {
  return (
    <section className="bg-gray-100 py-12 mb-4 mt-4">
      <div className="container mx-auto">
        <div className="text-center">
        <motion.div
                       initial={{ opacity: 0, scale: 2 }}
                       animate={{ opacity: 2, scale: 1 }}
                       transition={{ duration: 3 }}
                    >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-yellow-500">Develop your Skill with us!</h2>
          </motion.div>
         
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          <Marquee>
          Skills are not acquired overnight, but through dedication, practice, and a relentless pursuit of improvement. 
          </Marquee>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Add your relevant content here */}
         
          <motion.div
            className="bg-white p-4 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Your content for the first item */}
            
                {/* <h2>Muntasir</h2> */}
                <img src="https://i.ibb.co/xmxdPTG/istockphoto-537312128-612x612.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
                
            
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Your content for the second item */}
            
                {/* <h2 className='text-center'>Muntasir</h2> */}
                <img src="https://i.ibb.co/BCWfh5r/istockphoto-1456338666-612x612.jpg " alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
                {/* https://i.ibb.co/BCWfh5r/istockphoto-1456338666-612x612.jpg */}
            
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded shadow-md"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            {/* Your content for the third item */}
        
                {/* <h2>Muntasir3</h2> */}
                <img src="https://i.ibb.co/JrP6220/istockphoto-654181678-612x612.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
