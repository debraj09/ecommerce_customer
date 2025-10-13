'use client';
import React,{useState} from 'react';

const CouponArea = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openCoupon, setOpenCoupon] = useState<boolean>(false);
  return (
    <section className="coupon-area pt-10 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>Returning customer? <span id="showlogin" onClick={() => setOpenLogin(!openLogin)}>Click here to login</span></h3>
              {openLogin && (
              <div id="checkout-login" className="coupon-content">
                <div className="coupon-info">
                  <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                    sit amet ipsum luctus.</p>
                  <form action="#">
                    <p className="form-row-first">
                      <label>Username or email <span className="required">*</span></label>
                      <input type="text" />
                    </p>
                    <p className="form-row-last">
                      <label>Password <span className="required">*</span></label>
                      <input type="text" />
                    </p>
                    <p className="form-row">
                      <button className="tp-btn tp-color-btn" type="submit">Login</button>
                      <label>
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </p>
                    <p className="lost-password">
                      <a href="#">Lost your password?</a>
                    </p>
                  </form>
                </div>
              </div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>Have a coupon? <span id="showcoupon" onClick={() => setOpenCoupon(!openCoupon)}>Click here to enter your code</span></h3>
              {openCoupon && (
              <div id="checkout_coupon" className="coupon-checkout-content">
                <div className="coupon-info">
                  <form action="#">
                    <p className="checkout-coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button className="tp-btn tp-color-btn" type="submit">Apply Coupon</button>
                    </p>
                  </form>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponArea;