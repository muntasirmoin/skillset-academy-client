import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
// import { AuthContext } from 'path/to/AuthProvider';

const ClassCard = ({ classData, selectedCart }) => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    //   console.log('user role',isAdmin);
    // console.log('selectedCart:', selectedCart);
    // console.log('classData:', classData);
    // test handle selects start-------

    // console.log('user email', user?.email)

    const [selected, setSelected] = useState(false);
    const [paid, setPaid]= useState(false);
    const { className, image, availableSeats, price, _id } = classData;

// class data

    fetch(`http://localhost:3000/selectedCard/${user?.email}`)
        .then(res => res.json())
        .then(selectedClassesData => {
            // console.log('cart', selectedClassesData);
            //   const selectedClasses = selectedClassesData.map(item => item.selectId); // Extract the selectId from selected classes
            const selectedEmail = selectedClassesData.map(item => item.email);
            const selectedUserEmail = selectedEmail.find(item => item.email === user?.email);

            const selectedClasses = selectedClassesData.map(item => item.selectId); // Extract the selectId from selected classes
            // console.log('cart', selectedClassesData);
            if (selectedClasses.includes(classData._id) === true) {
                // console.log('hi');
                setSelected(true);
            }
        });


        // test here-----------------------
        fetch(`http://localhost:3000/payments/${_id}`)
        .then(res => res.json())
        .then(selectedClassesData => {
            

            const selectedClassesID = selectedClassesData.map(item => item.selectId); // Extract the selectId from selected classes
          
            if (selectedClassesID.includes(classData._id) === true) {
                // console.log('hi');
                setPaid(true);
            }
        });




        // test









    const isUserLoggedIn = !!user;
    const isUserAdminOrInstructor = isAdmin === true || isInstructor === true;
    const isSeatsAvailable = classData.availableSeats > 0;
    const isButtonDisabled = !isUserLoggedIn || !isSeatsAvailable || isUserAdminOrInstructor || selected || paid;

    const getCardBackground = () => {
        if (!isSeatsAvailable) {
            return 'bg-red-300';
        }
        return 'bg-white';
    };


    //   start-------------------------------------------------

    
    // const { name, image, price, recipe, _id } = item;




    // const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();







    // main handle start

    const handleAddToSelect = classData => {
        console.log(classData);
        if (user && user.email) {
            const selectItem = { selectId: _id, className, image, price, email: user.email,availableSeats}
            fetch('http://localhost:3000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // to do
                        // refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    // end
    //  main handle end
    return (
        <div className={`card ${getCardBackground()}`}>
            <img src={classData?.image} alt='image' className="w-full h-40 object-cover" />
            <div className="card-body">
                <h2 className="card-title">Class Name: {classData.className}</h2>
                <p className="text-gray-600">Instructor: {classData.instructorName}</p>
                <p className="text-gray-600">Available Seats: {classData.availableSeats}</p>
                <p className="text-gray-600">Enrolled Seats: {classData.enroll}</p>
                <p className="text-gray-600">Price: {classData.price}</p>
                {isUserLoggedIn ? (
                    <button
                        className={`btn ${isButtonDisabled ? 'btn-disabled' : 'btn-primary'}`}
                        disabled={isButtonDisabled} onClick={() => handleAddToSelect(classData)}
                    >
                        {isButtonDisabled ? 'Select' : 'Select'}
                    </button>
                ) : (
                    <Link to='/login'><button className="text-red-600 btn btn-primary">Please log in to select the course.</button></Link>
                )}
            </div>
        </div>
    );
};

export default ClassCard;
