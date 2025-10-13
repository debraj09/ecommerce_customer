import React from 'react';
import CountdownTimer from '@/components/common/countdown-timer';
import Link from 'next/link';

const OfferCountdownBannerTwo = () => {
  return (
    <section className="product-coundown-area tpcoundown__bg pb-25" style={{backgroundImage: "url(/assets/img/banner/coundpwn-bg-3.png)"}} >
    <div className="container custom-container">
       <div className="row">
          <div className="col-xl-6 col-lg-5 col-md-4"></div>
          <div className="col-xl-6 col-lg-7 col-md-8">
             <div className="tpcoundown p-relative">
                <div className="section__content mb-35">
                   <span className="section__sub-title mb-10">~ Deals Of The Day ~</span>
                   <h2 className="section__title mb-25">Premium Drinks <br/> Fresh Farm Product</h2>
                   <p>The liber tempor cum soluta nobis eleifend option congue <br/>
                      doming quod mazim placerat facere possum assam going through.</p>
                </div>
                <div className="tpcoundown__count">
                   <h4 className="tpcoundown__count-title">hurry up! Offer End In:</h4>
                   <CountdownTimer expiryTimestamp={new Date(2024, 6, 11)} />
                   <div className="tpcoundown__btn mt-50">
                      <Link className="whight-btn" href="/shop">Shop Now</Link>
                      <Link className="whight-btn border-btn ml-15" href="/shop">View Menu</Link>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default OfferCountdownBannerTwo;