import React from 'react';

const CheckoutOrder = () => {
  return (
    <>
    <div className="accordion" id="checkoutAccordion">
      <div className="accordion-item">
          <h2 className="accordion-header" id="checkoutOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
            Direct Bank Transfer
            </button>
          </h2>
          <div id="bankOne" className="accordion-collapse collapse show" aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
            <div className="accordion-body">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
            </div>
          </div>
      </div>
      <div className="accordion-item">
          <h2 className="accordion-header" id="paymentTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false" aria-controls="payment">
            Cheque Payment
            </button>
          </h2>
          <div id="payment" className="accordion-collapse collapse" aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
            <div className="accordion-body">
            Please send your cheque to Store Name, Store Street, Store Town, Store
            State / County, Store
            Postcode.
            </div>
          </div>
      </div>
      <div className="accordion-item">
          <h2 className="accordion-header" id="paypalThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paypal" aria-expanded="false" aria-controls="paypal">
            PayPal
            </button>
          </h2>
          <div id="paypal" className="accordion-collapse collapse" aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
            <div className="accordion-body">
            Pay via PayPal; you can pay with your credit card if you don’t have a
            PayPal account.
            </div>
          </div>
      </div>
    </div>
    <div className="order-button-payment mt-20">
      <button type="submit" className="tp-btn tp-color-btn w-100 banner-animation">Place order</button>
    </div>  
    </>
  );
};

export default CheckoutOrder;