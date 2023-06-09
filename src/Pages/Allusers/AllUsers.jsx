import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

import { GiTeacher } from 'react-icons/gi';
import { GrUserAdmin } from 'react-icons/gr';

const AllUsers = () => {

    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await axiosSecure.get('/users')
    //     return res.data;
    // })

    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUsers(data);
            });
    }, [users]);

    // admin make
    const handleMakeAdmin = user => {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
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
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    //  make instructor

    const handleMakeInstructor = user => {
        fetch(`http://localhost:3000/users/instructor/${user._id}`, {
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
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div>
            <h3 className="text-3xl font-semibold my-4 text-center">Manage Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Role: Admin / instructor</th>

                            {/* <th>Admin</th> */}
                            {/* <th>Instructor</th> */}
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/*  */}
                                <td>
                                    <td>
                                        {
                                            user.role === 'admin' || user.role === 'instructor' ? <> <span className='uppercase text-green-400 font-bold'>{`${user?.role} `}</span>
                                                <div className='border border-2 border-red-300 border-double p-1'>
                                                    <button disabled={true} className="btn btn-ghost bg-orange-600  text-white" style={{ fontSize: '24px' }}><GrUserAdmin></GrUserAdmin></button>

                                                    <button disabled={true} className="ms-1 btn btn-ghost bg-orange-600  text-white" style={{ fontSize: '24px' }}><GiTeacher></GiTeacher></button>
                                                </div>

                                            </> :
                                                <>
                                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white" style={{ fontSize: '24px' }}><GrUserAdmin></GrUserAdmin></button>

                                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white" style={{ fontSize: '24px' }}><GiTeacher></GiTeacher></button>

                                                </>
                                        }
                                    </td></td>

                                {/*  */}
                                {/* <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white">Admin</button> 
                                    }</td>
                                   
                                    <td>{ user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white">Instructor</button> 
                                    }</td> */}
                                {/*  */}
                                {/* <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white">delete</button></td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;


// http://localhost:5174/allusers