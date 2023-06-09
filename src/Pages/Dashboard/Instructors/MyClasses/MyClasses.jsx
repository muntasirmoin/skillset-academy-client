import React, { useEffect, useState } from 'react';

const MyClasses = () => {
    const [classes, setClasses] = useState([]);
   
    useEffect(()=>{
        fetch(`http://localhost:3000/class`)
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setClasses(data);
        })
    },[classes])


    const handleDelete = id => {
        
    }

    return (
        <div>
             <h3 className="text-3xl font-semibold my-4 text-center">My Classes: {classes.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            
                            <th>price</th>
                        
                            <th>Status</th>
                            {/* Total Enrolled Students, Feedback & Update button. */}
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classe, index) => <tr key={classe._id}>
                                <th>{index + 1}</th>
                                <td>{classe.className}</td>
                                <td>{classe.availableSeats}</td>
                                <td>{classe.price}</td>
                                <td>{classe.status}</td>
                                 <td>
                                 <td>
                                 {
                                    // user.role === 'admin' || user.role === 'instructor' ? `${user?.role}` :
                                    // <>
                                    // <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"  style={{ fontSize: '24px' }}><GrUserAdmin></GrUserAdmin></button> 

                                    // <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white" style={{ fontSize: '24px' }}><GiTeacher></GiTeacher></button> 
                                    
                                    // </>
                                 }
                                 </td></td>
                                 <td></td>
               
                                <td><button onClick={() => handleDelete(classe._id)} className="btn btn-ghost bg-red-600  text-white">Update</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;