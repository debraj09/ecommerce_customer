'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import product_data from '@/data/product-data';
import ProductSingle from '../product-single/product-single';

// slider setting
const slider_setting = {
		slidesPerView: 5,
		spaceBetween: 20,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.tpproduct-arrow-left',
			prevEl: '.tpproduct-arrow-right',
		}
}

const DiscountProducts = () => {
  const products = [...product_data].filter(p => p.sale_price);
  return (
    <section className="weekly-product-area grey-bg whight-product">
    <div className="container">
       <div className="sections__wrapper white-bg pr-50 pl-50">
          <div className="row align-items-center">
             <div className="col-md-6 text-center">
                <div className="tpsection mb-15">
                   <h4 className="tpsection__title text-start brand-product-title">Weekly Food Offers</h4>
                </div>
             </div>
             <div className="col-md-6">
                <div className="tpproduct__all-item">
                   <a href="#">View All <i className="icon-chevron-right"></i></a>
                </div>
             </div>
          </div>
          <div className="row">
             <div className="col-lg-12">
                <div className="tpnavtab__area pb-40">
                   <div className="tpproduct__arrow p-relative">
                      <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active-2 tpslider-bottom p-relative">
                        {products.map((product, index) => (
                           <SwiperSlide key={index}>
                              <ProductSingle product={product} progress={true} price_space='mb-5' />
                           </SwiperSlide>
                        ))}
                      </Swiper>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default DiscountProducts;