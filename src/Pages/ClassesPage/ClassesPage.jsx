import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const ClassesPage = () => {

    const [classes, setClasses] = useState([]);
   
    useEffect(()=>{
        fetch(`http://localhost:3000/class/approve`)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setClasses(data);
        })
    },[classes])

    
    return (
        <div>
           

            <div>
      <h2 className='text-center'>Approved Classes</h2>
      <div className="grid grid-cols-3 gap-4">
        {classes.map((classData) => (
          <ClassCard key={classData._id} classData={classData}/>
        ))}
      </div>
    </div>
          
        </div>
    );
};

export default ClassesPage;