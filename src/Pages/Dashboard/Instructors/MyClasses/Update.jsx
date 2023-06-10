import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// 


// 

const Update = () => {
    const [classData, setClassData] = useState([]);
    // const [classes, setClasses] = useState([]);
const { id } = useParams();
const navigate = useNavigate();
const from = '/dashboard';

useEffect(()=>{
    fetch(`http://localhost:3000/class/${id}`)
    .then(res =>res.json())
    .then(data =>{
        // console.log(data);
        setClassData(data);
    })
},[classData])
// console.log('classe', classes);
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setClasses((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   // Perform the necessary logic to update the class data on the server
    //   fetch(`http://localhost:3000/class/${classData._id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(classes),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // Handle the response data
    //       console.log('submit',data);
  
    //       // Close the modal
    //     //   closeModal();
    //     })
    //     .catch((error) => {
    //       // Handle any errors
    //       console.error(error);
  
    //       // Close the modal
    //     //   closeModal();
    //     });
    // };
    const handleUpdate =(event) =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;
        const className = form.className.value;

        const updateClass = {price, availableSeats, className};
        console.log(updateClass)

        // 
        fetch(`http://localhost:3000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Update successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      });
                    navigate(from, { replace: true })
                }
                else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'No Update Done!',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate(from, { replace: true })
                }
            })

        // 
    }
  
    return (
       <div>
         
        
            
            <div className="flex items-center justify-center  bg-gray-100">
                <div className="w-3/4 max-w-md p-6 mt-2 mb-2 bg-white rounded-lg shadow-md">
                    <h1 className='font-semibold text-center text-green-500'>Update Below </h1>



                    <form className="space-y-4" onSubmit={handleUpdate}>


                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-center mb-2">Class Name</label>
                            <input type="text" id="name" value={classData.className} readOnly name='classNam' className="input input-bordered text-center font-semibold text-blue-700" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-center mb-2">Class ID</label>
                            <input type="text" id="name" value={classData._id} readOnly name='classId' className="input input-bordered text-center font-semibold text-blue-700" />
                        </div>

                        <hr />
                      <div className='text-center'>
                      <h1 className='font-semibold'>You can update</h1>
                        <h3 className='text-red-900 font-semibold'> Class Name & Price & Available Seats</h3>
                      </div>
                      <div className="flex flex-col">
                            <label className="text-sm font-semibold text-center mb-2">Class Name</label>
                            <input required type="text" id="name" defaultValue={classData.className} name='className' className="input input-bordered" />
                        </div>


                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-center mb-2">Price</label>
                            <input required type="number" id="price" defaultValue={classData.price} name='price' className="input input-bordered" />
                        </div>



                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-center mb-2">Available Seats</label>
                            <input required type="number" id="availableSeats" defaultValue={classData.availableSeats} name='availableSeats' className="input input-bordered" />
                        </div>

                        





                        <button type="submit" className="btn btn-sm btn-outline btn-error mb-2">Update</button>
                    </form>
                </div>
            </div>
            
              </div>
            
        
    );
  };
  

export default Update;