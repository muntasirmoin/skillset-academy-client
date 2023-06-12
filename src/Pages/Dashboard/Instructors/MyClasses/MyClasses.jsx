import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';

const MyClasses = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
   
    useEffect(()=>{
        fetch(`https://skillset-academy-server.vercel.app/class/${user?.email}`)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
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
                    <thead className='text-center'>
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Class Name</th>
                            <th className="border px-4 py-2">Available Seats</th>
                            
                            <th className="border px-4 py-2">price</th>
                        
                            <th className="border px-4 py-2">Status</th>
                            {/* Total Enrolled Students, Feedback & Update button. */}
                            <th className="border px-4 py-2">Enrolled</th>
                            <th className="border px-4 py-2">Feedback</th>
                            <th className="border px-4 py-2">Update</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            classes.map((classe, index) => <tr key={classe._id}>
                                <th className="border px-4 py-2">{index + 1}</th>
                                <td className="border px-4 py-2">{classe.className}</td>
                                <td className="border px-4 py-2">{classe.availableSeats}</td>
                                <td className="border px-4 py-2">{classe.price}</td>
                                <td className="border px-4 py-2">{classe.status}</td>
                                <td className="border px-4 py-2">{classe.enroll}</td>
                              <td className="border px-4 py-2">
                                {
                                    classe.status === 'deny' ? classe.feedback : ''
                                }
                              </td>
                              
               
                                <td className="border px-4 py-2"><Link to={`/dashboard/update/${classe._id}`}><p  className="btn btn-sm btn-outline btn-warning mb-2" style={{ fontSize: '20px' }}>Update</p></Link></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;