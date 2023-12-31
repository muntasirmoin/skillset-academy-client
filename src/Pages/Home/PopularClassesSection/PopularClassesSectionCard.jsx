import React from 'react';

const PopularClassesSectionCard = ({classData}) => {
    // console.log('aaaa', classData)
    return (
        <div className={`card border border-gray-300 rounded-lg shadow-lg overflow-hidden`}>
            <img src={classData?.classImageUrl} alt='image' className="w-full h-40" />
            <div className="card-body">
                <h2 className="card-title text-center"> {classData.className}</h2>
                <p className="text-gray-600">Instructor: {classData.instructorName}</p>
                <p className="text-gray-600">Available Seats: {classData.availableSeats}</p>
                <p className="text-gray-600">Enrolled Seats: {classData.enroll}</p>
                <p className="text-gray-600">Price: {classData.price}</p>
               
            </div>
        </div>
    );
};

export default PopularClassesSectionCard;