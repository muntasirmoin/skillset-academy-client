import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const {user} = useContext(AuthContext);
    
    const [cardError, setCardError] = useState('');

    useEffect(() => {
        console.log('inside price', price);
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])





    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }


        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        // console.log('card', card);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
            setCardError(error.message);
          } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
          }
          setProcessing(true);
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous user',
                  name: user?.displayName || 'anonymous user',
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError);
          }
          console.log('payment intent', paymentIntent);
          setProcessing(false);

          if(paymentIntent?.status === 'succeeded'){
            setTransactionId(paymentIntent?.id)
            // const transactionId = paymentIntent?.id;
          }


    }
    return (
      <>
        <form className='w-2/3 m-8' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-sm btn-outline btn-success mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-800'>{cardError}</p> }
      {transactionId && <p className='text-green-400'>Transaction complete with TransactionId: {transactionId}</p>}
      </>
    );
};

export default CheckoutForm;