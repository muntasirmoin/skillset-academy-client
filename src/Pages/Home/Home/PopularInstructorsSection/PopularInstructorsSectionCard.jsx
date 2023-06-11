import React from 'react';

const PopularInstructorsSectionCard = ({classData}) => {
    return (
        <div className={`card`}>
        <img src={classData?.classImageUrl} alt='image' className="w-full h-40" />
        <div className="card-body">
            <h2 className="card-title">Instructor Name: {classData.name}</h2>
            <p className="text-gray-600">Instructor Email: classData.email</p>
         
           
        </div>
    </div>
    );
};

export default PopularInstructorsSectionCard;