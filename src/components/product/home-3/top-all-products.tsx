'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IProductData } from '@/types/product-d-t';
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
    nextEl: '.tpproduct-arrow-left-2',
    prevEl: '.tpproduct-arrow-right-2',
  },
}

// tabs
const tabs = ['All','Fresh Bakery','Biscuits Snack','Fresh Meat'];

const TopAllProducts = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [products, setProducts] = React.useState<IProductData[]>([...product_data]);

  const handleFilter = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'All') {
      setProducts([...product_data]);
    } else {
      setProducts([...product_data].filter((p) => p.category.parent.toLowerCase() === tab.toLowerCase()));
    }
  }
  return (
    <section className="weekly-product-area whight-product grey-bg">
    <div className="container">
       <div className="sections__wrapper white-bg pl-50 pr-50">
          <div className="row">
             <div className="col-lg-6 col-md-6">
                <div className="tpsection mb-10">
                   <h4 className="tpsection__title brand-product-title">Top Trending Products</h4>
                </div>
             </div>
             <div className="col-lg-6 col-md-6 text-center">
                <div className="tpnavtab__area tp-navtab-style-2">
                   <nav>
                      <div className="nav nav-tabs" role="tablist">
                        {tabs.map((tab, index) => (
                          <button
                            key={index}
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            type="button"
                            onClick={() => handleFilter(tab)}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                   </nav>
                </div>
             </div>
          </div>
          <div className="row">
             <div className="col-lg-12">
                <div className="tpnavtab__area pb-40">
                   <div className="tab-content">
                         <div className="tpproduct__arrow p-relative">
                            <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active-3 tpslider-bottom p-relative tpproduct-priority">
                              {products.map((product, index) => (
                                  <SwiperSlide key={index}>
                                     <ProductSingle product={product} />
                                  </SwiperSlide>
                              ))}
                            </Swiper>
                            <div className="tpproduct-btn">
                               <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left-2"><a href="#"><i className="icon-chevron-left"></i></a></div>
                               <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right-2"><a href="#"><i className="icon-chevron-right"></i></a></div>
                            </div>
                         </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default TopAllProducts;