import React, { useEffect, useState } from 'react';
import InstructorsPageCard from './InstructorsPageCard';
import { Helmet } from 'react-helmet';

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

<Helmet>
                <title>SkillSet | Instructor</title>
            </Helmet>
        <div>
          {/* <h2 className='text-center mb-4 mt-4'>Instructor</h2> */}
          <h2 className="text-4xl text-center text-gray-600 whitespace-nowrap mb-6 font-bold sm:text-5xl md:text-6xl">Instructors</h2>
          <div className="grid grid-cols-3 gap-4 mb-4 ">
            {classes.map((classData) => (
              <InstructorsPageCard key={classData._id} classData={classData} />
            ))}
          </div>
        </div>
  
      </div>
    );
};

export default InstructorsPage;