import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const PaymentPage = () => {
   

    // test
    const { selectId } = useParams();
    // console.log(id);
    const [singleCart, setSingleCart] = useState({});

    useEffect(() => {
        fetch(`https://skillset-academy-server.vercel.app/cartspay/${selectId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleCart(data);
            })
    }, [singleCart])

    // console.log('cart:', singleCart[0]?.price);
 // test
 
    const [cart] = useCart();
    const total = parseFloat(singleCart[0]?.price) ;
    const price = parseFloat(total.toFixed(2));

   

    return (
        <div>
            <h2 className='text-center'>Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} singleCart={singleCart} />
            </Elements>
        </div>
    );
};

export default PaymentPage;