import React from 'react';

const PopularInstructorsSectionCard = ({classData}) => {
    return (
        <div className={`card max-w-sm rounded overflow-hidden shadow-lg`}>
        <img src={classData?.photoURL} alt='image' className="w-full h-40" />
        <div className="card-body">
            <h2 className="card-title">{classData.name}</h2>
            <p className="text-gray-600">Email: classData.email</p>
         
           
        </div>
    </div>
    );
};

export default PopularInstructorsSectionCard;