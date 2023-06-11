import React from 'react';

const InstructorsPageCard = ({classData}) => {
    return (
        <div className={`card bg-white rounded-lg p-4 shadow-xl text-center`}>
        <img src={classData?.photoURL} alt='image' className="w-full h-40" />
        <div className="card-body">
            <h2 className="font-bold text-2xl">{classData.name}</h2>
            <p className="text-gray-600">Email: {classData.email}</p>
         
           
        </div>
    </div>
    );
};

export default InstructorsPageCard;