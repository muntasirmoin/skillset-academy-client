import React, { useEffect, useState } from 'react';
import InstructorsPageCard from './InstructorsPageCard';

const InstructorsPage = () => {
    const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/class/instructorGetAll`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setClasses(data);
        
      })
  }, [classes])

    return (
        <div>


        <div>
          <h2 className='text-center'>Instructor</h2>
          <div className="grid grid-cols-3 gap-4">
            {classes.map((classData) => (
              <InstructorsPageCard key={classData._id} classData={classData} />
            ))}
          </div>
        </div>
  
      </div>
    );
};

export default InstructorsPage;