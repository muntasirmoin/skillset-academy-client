import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const PaymentHistory = () => {

    const { user, loading } = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState();

    useEffect(() => {
        fetch(`https://skillset-academy-server.vercel.app/paymenthistory/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('payment data', data);
                setEnrolled(data);
            })
    }, [enrolled])


    const total = enrolled?.reduce((sum, item) => parseFloat(item.price) + sum, 0);
    return (
        <div className=''>
            <h3 className="text-3xl font-semibold my-4 text-center">Payment History</h3>
            <h5 className="text-3xl font-semibold my-4 text-center">Total  Payment: <span className='text-green-500'>$ {total}</span> </h5>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">ClassName</th>
                            <th className="border px-4 py-2">Date</th>
                            <th className="border px-4 py-2">Transaction ID</th>
                            <th className="border px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {enrolled?.map((item, index) => (
                            <tr key={item._id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.className}</td>
                                <td className="border px-4 py-2">
                                {new Date(item.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                })}
                                </td>
                                <td className="border px-4 py-2">{item.transactionId}</td>
                                <td className="border px-4 py-2">$ {item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;