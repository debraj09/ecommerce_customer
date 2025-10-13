import Link from 'next/link';
import React from 'react';

const ProductBannerAreaFive = () => {
  return (
    <section className="banner-area pb-55">
    <div className="container">
       <div className="row">
          <div className="col-lg-6 col-md-12">
             <div className="tpbanner__wraper mb-20">
                <div className="tpbanner__thumb">
                   <Link href="/shop-2">
                      <div className="tpbanner__big-text tpbanner__big-bg" style={{backgroundImage: "url(/assets/img/banner/banner-12.jpg)"}}>
                         <div className="tpbanner__big-bg-content">
                            <span className="tpbanner__sub-title mb-20">Top offers</span>
                            <h4 className="tpbanner__title mb-15">pepper <br/> Weekend promo</h4>
                            <p>Natural, Rich in Nutrition</p>
                            <div className="tpbanner__btn">
                               <span className="whight-btn">Shop Now</span>
                            </div>
                         </div>
                      </div>
                   </Link>
                </div>
             </div>
          </div>
          <div className="col-lg-6">
             <div className="row">
                <div className="col-lg-12 col-md-12">
                   <div className="tpbanner__thumb mb-20">
                      <Link href="/shop">
                         <div className="tpbanner__text tpbanner__bg3" style={{backgroundImage: "url(/assets/img/banner/banner-11.jpg)"}}>
                            <div className="tpbanner__bg__second-content">
                               <span className="tpbanner__sub-title mb-20">Top offers</span>
                               <h4 className="tpbanner__title mb-15">Weekend menu <br/> Biscuits Japanese</h4>
                               <p>Everything You Need</p>
                            </div>
                         </div>
                      </Link>
                   </div>
                </div>
             </div>
             <div className="row gx-3">
                <div className="col-lg-6 col-md-6">
                   <div className="tpbanner__thumb mb-20">
                      <Link href="/shop">
                         <div className="tpbanner__text tpbanner__bg4" style={{backgroundImage: "url(/assets/img/banner/banner-10.jpg)"}}>
                            <h4 className="tpbanner__title mb-20">seafood <br/> Fresh & Tasty</h4>
                            <p>Express Delivery</p>
                         </div>
                      </Link>
                   </div>
                </div>
                <div className="col-lg-6 col-md-6">
                   <div className="tpbanner__thumb mb-20">
                      <Link href="/shop">
                         <div className="tpbanner__text tpbanner__bg4" style={{backgroundImage: "url(/assets/img/banner/banner-13.jpg)"}}>
                            <h4 className="tpbanner__title mb-20">Fresh Meat <br/> Best For Family</h4>
                            <p>Only Sell Online</p>
                         </div>
                      </Link>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default ProductBannerAreaFive;