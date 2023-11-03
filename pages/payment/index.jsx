"use client";
// pages/payment.js
// import { useState } from 'react';
import QRCode from 'qrcode.react';
// import { load } from 'razorpay';

import React, { useState } from 'react';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails(e.target.value);
  };

  const initiatePayment = () => {
    // Implement payment initiation logic here based on the selected payment method and payment details.
    // You would typically interact with your chosen payment gateway here.
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Payment Page</h1>

      <div className="mb-4">
        <p className="mb-2 font-semibold">Select Payment Method:</p>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === 'UPI'}
              onChange={() => handlePaymentMethodChange('UPI')}
              className="mr-2"
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="QRCode"
              checked={paymentMethod === 'QRCode'}
              onChange={() => handlePaymentMethodChange('QRCode')}
              className="mr-2"
            />
            QR Code
          </label>
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 font-semibold">Enter Payment Details:</p>
        <input
          type="text"
          value={paymentDetails}
          onChange={handlePaymentDetailsChange}
          className="w-full p-2 border rounded"
          placeholder="Enter payment details..."
        />
      </div>

      <button
        onClick={initiatePayment}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Pay
      </button>
    </div>
  );
};

export default PaymentPage;
