import React from 'react';
import { motion } from 'framer-motion';

const ExtraSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Extra Section</h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Add a catchy subtitle or description here
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
            
                <h2>Muntasir</h2>
                <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
                
            
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Your content for the second item */}
            
                <h2 className='text-center'>Muntasir</h2>
                <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
                
            
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Your content for the third item */}
        
                <h2>Muntasir</h2>
                <img src="https://i.ibb.co/KFqkqLV/cy1.jpg" alt="Slide 1" className="mx-auto h-64 w-64 object-contain pt-4" />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
