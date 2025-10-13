import Link from 'next/link';
import React from 'react';

const ProductBannerAreaFour = () => {
  return (
    <section className="banner-area">
        <div className="container-fluid g-0">
          <div className="row gx-0">
              <div className="col-lg-6 col-sm-12">
                <div className="tpbanner__main p-relative">
                    <div className="tpbanner__main-thumb tpbanner__bg2" style={{backgroundImage: "url(/assets/img/banner/banner-9.jpg)"}}>
                      <div className="tpbanner__main-content">
                          <h5 className="tpbanner__main__sub-title mb-15">Weekend Deals</h5>
                          <h5 className="tpbanner__main__title mb-40">Fresh Food <br/> Restore Health</h5>
                          <Link className="tp-btn banner-btn" href="/shop">Shop Now</Link>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="tpbanner__main p-relative">
                    <div className="tpbanner__main-thumb tpbanner__bg2" style={{backgroundImage: "url(/assets/img/banner/banner-8.jpg)"}}>
                      <div className="tpbanner__main-content">
                          <h5 className="tpbanner__main__sub-title tpbanner__yellow mb-15">Weekend Deals</h5>
                          <h5 className="tpbanner__main__title tpbanner__white mb-40">Fresh Food <br/> Restore Health</h5>
                          <Link className="tp-btn banner-btn" href="/shop">Shop Now</Link>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  );
};

export default ProductBannerAreaFour;