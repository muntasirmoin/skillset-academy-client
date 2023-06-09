import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';


const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log('cart',cart);
    const total = cart.reduce((sum, item) => parseFloat(item.price) + sum, 0);

    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure to delete this selected class?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:3000/carts/${item._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your Selected class has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }




    return (
        <div>
             <h3 className="text-3xl font-semibold my-4">Selected Class: {cart.length}</h3>
             <h4>Total price:$ {total}</h4>
             <button className='btn btn-outline btn-success'>pay</button>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                        
                          
                             <th>price</th>
                             <th>pay</th>
                             <th>Delete</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((classe, index) => <tr key={classe._id}>
                                <th>{index + 1}</th>
                                <td><img src="" alt="image" /></td>
                                <td>{classe.className}</td>
                              
                            
                                <td>$ {classe.price}</td>
                               
                                <td> <button onClick={() => handleFeedBack(user)} className="btn btn-sm btn-outline btn-success" style={{ fontSize: '10px' }}>pay</button> </td>
                                
                                <td> <button onClick={() => handleDelete(classe)} className="btn btn-sm btn-outline btn-error" style={{ fontSize: '10px' }}>Delete</button> </td>
                       
               
                             
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;