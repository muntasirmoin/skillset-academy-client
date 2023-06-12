import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import FeedbackModal from './FeedbackModal';




const ManageClasses = () => {

    const [classes, setClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/class`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClasses(data);
            })
    }, [classes])
    // approve

    const handleMakeApprove = user => {
        fetch(`http://localhost:3000/class/approve/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
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
    const handleMakeDeny = user => {
        fetch(`http://localhost:3000/class/deny/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
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


    // test

    // const handleOpenModal = ClassId => {
    //     setSelectedClassId(ClassId);
    //     setIsModalOpen(true);
    // };
    const handleOpenModal = (ClassId) => {
        setSelectedClassId(ClassId);
        setIsModalOpen(true);
        console.log(ClassId, isModalOpen);
      };
      

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSendFeedback = classe => {
        handleOpenModal(classe._id);
        setSelectedClassId(classe._id);
        // console.log(classe._id);
    };
    // test
    // Class Image, Class name, Instructor name, Instructor email, 
    // Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).
    return (
        <div className=''>
            <h3 className="text-3xl font-semibold my-4 text-center">Manage Classes: {classes.length}</h3>
            <div className="overflow-x-scroll overflow-y-scroll">
                <table className="table  table-auto w-full overflow-x-auto">
                    {/* head */}
                    <thead>

                        <tr>
                            <th className='text-center border px-4 py-2'>#</th>
                            <th className='text-center border px-4 py-2'>Image</th>
                            <th className='text-center border px-4 py-2'>Class Name</th>
                            <th className='text-center border px-4 py-2'>Instructor Name</th>
                            <th className='text-center border px-4 py-2'>Instructor Email</th>
                            <th className='text-center border px-4 py-2'>Available Seats</th>
                            <th className='text-center border px-4 py-2'>price</th>
                            <th className='text-center border px-4 py-2'>Status</th>
                            <th className='text-center border px-4 py-2'>Approve / Deny</th>


                            <th className='text-center border px-4 py-2'>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classe, index) => <tr key={classe._id}>
                                <th className='text-center border px-4 py-2'>{index + 1}</th>
                                <td className='text-center border px-4 py-2'><img src={classe.classImageUrl} alt="image" /></td>
                                <td className='text-center border px-4 py-2'>{classe.className}</td>
                                <td className='text-center border px-4 py-2'>{classe.instructorName}</td>
                                <td className='text-sm text-center border px-4 py-2'>{classe.instructorEmail}</td>
                                <td className='text-center border px-4 py-2'>{classe.availableSeats}</td>
                                <td className='text-center border px-4 py-2'>{classe.price}</td>
                                <td className='text-center border px-4 py-2 uppercase text-green-400 font-bold'>{classe.status}</td>
                                
                                    <td className='text-center border px-4 py-2'>
                                        {
                                            classe.status === 'approve' || classe.status === 'deny' ? <>
                                                <div className='border-2 border-red-300 border-double p-1'>

                                                    <button disabled={true} className="btn btn-sm btn-outline btn-success mb-2" style={{ fontSize: '10px' }}>Approve</button>

                                                    <button disabled={true} className="btn btn-sm btn-outline btn-error ms-2" style={{ fontSize: '10px' }}>Deny</button>

                                                </div>
                                            </> :
                                                <>
                                                    <div>
                                                        <button onClick={() => handleMakeApprove(classe)} className="btn btn-sm btn-outline btn-success mb-2" style={{ fontSize: '10px' }}>Approve</button>

                                                        <button onClick={() => handleMakeDeny(classe)} className="btn btn-sm btn-outline btn-error ms-2" style={{ fontSize: '10px' }}>Deny</button>
                                                    </div>

                                                </>
                                        }
                                    </td>
                                <td className='text-center border px-4 py-2'> <button onClick={() => handleSendFeedback(classe)} className="btn btn-sm btn-outline btn-info" style={{ fontSize: '10px' }}>feedback</button> </td>


                            </tr>)
                        }


                    </tbody>
         
                </table>
            </div>


            {isModalOpen && (
        <FeedbackModal
        selectedClassId={selectedClassId}
          closeModal={handleCloseModal}
        />
      )}
        
        </div>
    );
};

export default ManageClasses;