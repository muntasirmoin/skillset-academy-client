import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import { Helmet } from 'react-helmet';

const ClassesPage = () => {

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://skillset-academy-server.vercel.app/class/approve`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setClasses(data);
      })
  }, [classes])


  return (
    <div>
<Helmet>
                <title>SkillSet | Classes</title>
            </Helmet>

      <div>
        <h2 className='text-4xl text-center text-gray-600 whitespace-nowrap mb-6 font-bold sm:text-5xl md:text-6xl'>Classes</h2>
        <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
          {classes.map((classData) => (
            <ClassCard key={classData._id} classData={classData} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ClassesPage;