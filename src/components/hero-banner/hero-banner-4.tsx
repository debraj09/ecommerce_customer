import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fruit_1 from '@/assets/img/shape/fruits-1.png';
import fruit_2 from '@/assets/img/shape/fruits-2.png';
import coca_1 from '@/assets/img/shape/coca1.png';
import coca_2 from '@/assets/img/shape/coca2.png';
import tree_leaf_1 from '@/assets/img/shape/tree-leaf-7.png';
import tree_leaf_2 from '@/assets/img/shape/tree-leaf-8.png';

// img style 
const imgStyle = {
  height: 'auto',
}

const HeroBannerFour = () => {
  return (
    <section className="hero-area tphero__bg" style={{backgroundImage:`url(/assets/img/banner/banner-7.png)`}}>
    <div className="container">
       <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-7 order-2 order-sm-1 order-xs-1">
             <div className="tphero__wrapper p-relative">
                <h5 className="tphero__sub-title mb-40">Top Seller In The Week</h5>
                <h3 className="tphero__title mb-25">Perfect <br/> Your Healthy Life.</h3>
                <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br/> look good and taste even better.</p>
                <div className="tphero__btn">
                   <Link href="/shop" className="tp-btn banner-btn">Shop Now</Link>
                </div>
                <div className="tphero__wrapper-shape pera tphero__thumb-img">
                   <Image data-depth="1.3" src={fruit_1} alt="fruit-img" style={imgStyle}/>
                </div>
             </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-5 order-1 order-sm-2 order-xs-2">
             <div className="tphero__thumb tphero__pt p-relative pt-80">
                <div className="pera2 ">
                   <Image data-depth="1" src={coca_1} alt="coca-shape-1" style={imgStyle}/>
                </div>
                <div className="tphero__thumb-shape  d-none d-md-block">
                   <div className="tphero__thumb-shape-one pera3 tphero__thumb-img">
                      <Image data-depth="2.4" src={coca_2} alt="coca-shape-2" style={imgStyle}/>
                   </div>
                   <div className="tphero__thumb-shape-three pera4 tphero__thumb-img  d-none d-xxl-block">
                      <Image data-depth="1.3" src={fruit_2} alt="coca-shape-2" style={imgStyle}/>
                   </div>
                   <div className="tphero__thumb-shape-four pera5 tphero__thumb-img  d-none d-md-block">
                      <Image data-depth="5" src={tree_leaf_1} alt="coca-shape-2" style={imgStyle}/>
                   </div>
                   <div className="tphero__thumb-shape-five pera6 tphero__thumb-img  d-none d-md-block">
                      <Image data-depth="1.8" src={tree_leaf_2} alt="coca-shape-2" style={imgStyle}/>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default HeroBannerFour;