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
        <h2 className='text-center'>Popular Classes</h2>
        <div className="grid grid-cols-3 gap-4">
          {classes.map((classData) => (
            <PopularClassesSectionCard key={classData._id} classData={classData} />
          ))}
        </div>
      </div>

    </div>
    );
};

export default PopularClassesSection;