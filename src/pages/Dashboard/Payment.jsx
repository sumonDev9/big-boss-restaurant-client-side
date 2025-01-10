import React from 'react';
import SectionHeading from '../../components/sectionHeading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


// TODO: add publishable key
const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div>
            <SectionHeading heading="Payment" subHeading='Please pay to eat'></SectionHeading>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;