import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [cart, refetch] = useCarts();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)


    useEffect(()=> {
        if(totalprice){
          axiosSecure.post('/create-payment-intent', {price: totalprice})
          .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
          })
        }
    }, [])
    const handleSubmit = async(event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }
        
    // confirm payment
    const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method:{
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {
      console.log('confirm error');
      // setError(error.message);
    } else {
      console.log('Payment intent', paymentIntent);
      // setError('')
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalprice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert, use moment js o
          cartIds: cart.map(item => item._id),
          menuitemIds: cart.map(item => item.menuId),
          status: 'send pending'
        }

        const res = await axiosSecure.post('/payments', payment);
        // console.log('payment saved', res.data);
        refetch();
        if(res.data.paymentResult.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you or the taka paisa",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }

    }  

    return (
     
   <form onSubmit={handleSubmit}>
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
      <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p>Your transaction id: {transactionId}</p>}
   </form>
    );
};

export default CheckOutForm;