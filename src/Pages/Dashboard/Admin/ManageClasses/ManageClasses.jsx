import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';




const ManageClasses = () => {
    
    const [classes, setClasses] = useState([]);
   
    useEffect(()=>{
        fetch(`http://localhost:3000/class`)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setClasses(data);
        })
    },[classes])
// approve

    const handleMakeApprove = user =>{
        fetch(`http://localhost:3000/class/approve/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.className} Approved!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    // deny
    const handleMakeDeny = user =>{
        fetch(`http://localhost:3000/class/deny/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.className} Deny!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }



    const handleDelete = id => {
        
    }
    // Class Image, Class name, Instructor name, Instructor email, 
    // Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).
    return (
        <div>
             <h3 className="text-3xl font-semibold my-4 text-center">Manage Classes: {classes.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                             <th>price</th>
                            <th>Status</th>
                            <th className='text-center'>Approve / Deny</th>
                       
                           
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classe, index) => <tr key={classe._id}>
                                <th>{index + 1}</th>
                                <td><img src="" alt="image" /></td>
                                <td>{classe.className}</td>
                                <td>{classe.instructorName}</td>
                                <td className='text-sm'>{classe.instructorEmail}</td>
                                <td>{classe.availableSeats}</td>
                                <td>{classe.price}</td>
                                <td>{classe.status}</td>
                                 <td>
                                 <td>
                                 {
                                    classe.status === 'approve' || classe.status === 'deny' ?                <>
                                    <button disabled={true} className="btn btn-sm btn-outline btn-success"  style={{ fontSize: '10px' }}>Approve</button> 

                                    <button disabled={true}  className="btn btn-sm btn-outline btn-error ms-2" style={{ fontSize: '10px' }}>Deny</button> 
                                    
                                    </> :
                                    <>
                                    <button onClick={() => handleMakeApprove(classe)} className="btn btn-sm btn-outline btn-success"  style={{ fontSize: '10px' }}>Approve</button> 

                                    <button onClick={() => handleMakeDeny(classe)} className="btn btn-sm btn-outline btn-error ms-2" style={{ fontSize: '10px' }}>Deny</button> 
                                    
                                    </>
                                 }
                                 </td></td>
                                 <td> <button onClick={() => handleFeedBack(user)} className="btn btn-sm btn-outline btn-info" style={{ fontSize: '10px' }}>feedback</button> </td>
               
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;