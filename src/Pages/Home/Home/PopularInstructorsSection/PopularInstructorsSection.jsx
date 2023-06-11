import React, { useEffect, useState } from 'react';
import PopularInstructorsSectionCard from './PopularInstructorsSectionCard';
// import PopularClassesSectionCard from '../../PopularClassesSection/PopularClassesSectionCard';


const PopularInstructorsSection = () => {

    const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/class/instructorSix`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setClasses(data);
        
      })
  }, [classes])

    return (
        <div>


        <div>
        <h2 className="text-4xl text-center text-blue-400 mb-6 mt-6 font-bold sm:text-5xl md:text-6xl">Skillful Instructors</h2>
        {/* <hr className='text-red-400 mt-4 mb-2 h-2' /> */}
        <div className="grid grid-cols-3 gap-4 border-2 border-gray-200  p-2 mb-2">
            {classes.map((classData) => (
              <PopularInstructorsSectionCard key={classData._id} classData={classData} />
            ))}
          </div>
        </div>
  
      </div>
    );
};

export default PopularInstructorsSection;