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
          <h2 className='text-center'>Popular Instructor</h2>
          <div className="grid grid-cols-3 gap-4">
            {classes.map((classData) => (
              <PopularInstructorsSectionCard key={classData._id} classData={classData} />
            ))}
          </div>
        </div>
  
      </div>
    );
};

export default PopularInstructorsSection;