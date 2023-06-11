import React, { useEffect, useState } from 'react';
import PopularClassesSectionCard from './PopularClassesSectionCard';

const PopularClassesSection = () => {
    const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/class/enrollSix`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setClasses(data);
        
      })
  }, [classes])
    return (
        <div>


      <div>
        {/* <h2 className='text-center'>Popular Classes</h2> */}
        <h2 className="text-4xl text-center text-green-400 mb-6 font-bold sm:text-5xl md:text-6xl">Trending Courses</h2>
        {/* <hr className='text-red-400 mt-4 mb-2 h-2' /> */}
        <div className="grid grid-cols-3 gap-4 border-2 border-gray-300  p-2">
          {classes.map((classData) => (
            <PopularClassesSectionCard key={classData._id} classData={classData} />
          ))}
        </div>
      </div>

    </div>
    );
};

export default PopularClassesSection;