import React from 'react';

import { motion } from 'framer-motion';

const DashboardHome = () => {
    return (
        
      <div>
         <motion.div
                       initial={{ y: -50, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    >
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome <br /> To <br /> Dashboard</h1>
   
    </div>
  </div>
</div>
</motion.div>
      </div>
    );
};

export default DashboardHome;