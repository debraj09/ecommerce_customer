import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import thumb from '@/assets/img/product/feature-thumb-1.png';
import shape_1 from '@/assets/img/product/feature-shape-1.png';
import shape_2 from '@/assets/img/product/feature-shape-2.png';
import shape_3 from '@/assets/img/product/feature-shape-3.png';

// img style 
const imgStyle = {
  height: "auto"
}

// prop type 
type IProps = {
  style_2?: boolean;
}
// product-feature-area product-feature pt-80 pb-20
const ProductFeatureArea = ({style_2=false}: IProps) => {
  return (
    <>
    {/* <section className={`product-feature-area product-feature pt-80 ${style_2?'pb-20':'grey-bg pb-40'}`}>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="tpfeature__thumb p-relative pb-40">
                  <Image src={thumb} alt="thumb" style={imgStyle}/>
                  <div className="tpfeature__shape d-none d-md-block">
                      <Image className="tpfeature__shape-one" src={shape_1} alt="shape" style={imgStyle}/>
                      <Image className="tpfeature__shape-two" src={shape_2} alt="shape" style={imgStyle}/>
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="tpproduct-feature p-relative pt-45 pb-40">
                  <div className="tpsection tpfeature__content mb-35">
                      <h4 className="tpsection__sub-title mb-0">~ The Best For Your ~</h4>
                      <h4 className="tpsection__title tpfeature__title mb-25">Organic Drinks <br/> <span>Easy Healthy</span> - Happy Life</h4>
                      <p>The liber tempor cum soluta nobis eleifend option congue <br/> doming quod mazim placerat facer possim assum.</p>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tpfeature__box">
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title">Fresh Fruits:</h4>
                              <span className="tpfeature__product-info">Apples, Berries & Cherries</span>
                            </div>
                            <div className="tpfeature__product-item mb-45">
                              <h4 className="tpfeature__product-title">Expiry Date:</h4>
                              <span className="tpfeature__product-">See on The Bottle Cap</span>
                            </div>
                            <div className="tpfeature__btn">
                              <Link className="tp-btn-4" href="/shop">View More</Link>
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tpfeature__box">
                            <div className="tpfeature__product-item mb-25">
                              <h4 className="tpfeature__product-title">Ingredient:</h4>
                              <span className="tpfeature__product-info">Energy, Protein, Sugars</span>
                            </div>
                            <div className="tpfeature__product-item mb-45">
                              <h4 className="tpfeature__product-title">Bootle Size:</h4>
                              <span className="tpfeature__product-">500ml – 1000ml</span>
                            </div>
                            <div className="tpfeature__btn">
                              <Link className="tp-btn-3" href="/shop">View More</Link>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="tpfeature__shape d-none d-md-block">
                      <Image className="tpfeature__shape-three" src={shape_3} alt="shape" style={imgStyle}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section> */}
    </>
  );
};

export default ProductFeatureArea;