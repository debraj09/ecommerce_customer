import React from 'react';
import Image from 'next/image';
import product_data from '@/data/product-data';
import ProductBrandSingle from '../product-single/product-sm-single';
import brand_thumb from '@/assets/img/brand/brand-thumb-1.png';

const ProductBrandFeature = () => {
  const brand_products = [...product_data].filter(p => p.brand === 'Super Market');
  return (
   <section className="brand-product grey-bg pb-60">
      <div className="container">
          <div className="sections__wrapper white-bg pl-50 pr-50 pb-40 brand-product">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <div className="tpsection mb-15">
                      <h4 className="tpsection__title text-start brand-product-title">Featured Brand Products</h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tpproduct__all-item">
                      <a href="#">View All <i className="icon-chevron-right"></i></a>
                  </div>
                </div>
            </div>
            <div className="row gx-3">
                <div className="col-lg-3">
                  <div className="tpbrandproduct__main text-center">
                      <div className="tpbrandproduct__main-thumb mb-20">
                        <Image src={brand_thumb} alt="brand_thumb"/>
                      </div>
                      <div className="tpbrandproduct__main-contetn">
                        <h4 className="tpbrandproduct__title">Super Market</h4>
                        <p>Nam liber tempor cum soluta nobis eleifend congue doming quod mazim placerat facer possim assum typi.</p>
                      </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row gx-3">
                    {brand_products.map((product, index) => (
                      <div key={index} className="col-xl-4 col-lg-6">
                        <ProductBrandSingle product={product} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProductBrandFeature;