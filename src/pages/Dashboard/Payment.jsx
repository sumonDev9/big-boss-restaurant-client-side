import React from 'react';
import SectionHeading from '../../components/sectionHeading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './Payment/CheckOutForm';


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)
const Payment = () => {
    return (
        <div>
            <SectionHeading heading="Payment" subHeading='Please pay to eat'></SectionHeading>
            <div>
                <Elements stripe={stripePromise}>
                  <CheckOutForm></CheckOutForm> 
                </Elements>
            </div>
        </div>
    );
};

export default Payment;