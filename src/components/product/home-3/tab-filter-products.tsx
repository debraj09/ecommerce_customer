'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IProductData } from '@/types/product-d-t';
import product_data from '@/data/product-data';
import ProductSingle from '../product-single/product-single';
import Link from 'next/link';

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

// tabs
const tabs = ['New Arrivals','Features','Best Rate'];

const TabFilterProducts = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [products, setProducts] = React.useState<IProductData[]>([...product_data]);

  const handleFilter = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'New Arrivals') {
      setProducts([...product_data].slice(-10));
    } else if (tab === 'Features') {
      setProducts([...product_data].slice(0, 10));
    }
    else {
      setProducts([...product_data].filter((p) => p.sale_price!  > 0).reverse());
    }
  }
  return (
    <>
      <div className="weekly-product-area whight-product grey-bg">
        <div className="container">
            <div className="sections__wrapper white-bg pl-50 pr-50 pb-10">
              <div className="row">
                  <div className="col-md-6">
                    <div className="tpnavtab__area tpnavtab__newitem">
                        <nav>
                          <div className="nav tp-nav-tabs">
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
                  <div className="col-md-6">
                    <div className="tpproduct__all-item">
                        <Link href="/shop">See All <i className="icon-chevron-right"></i></Link>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                    <div className="tpnavtab__area pb-40">
                        <div className="tab-content" id="nav-tabContent-tp">
                          <div>
                              <div className="tpproduct__arrow p-relative">
                                <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active-2 tpslider-bottom p-relative tpproduct-priority">
                                  {products.map((product,index) => (
                                      <SwiperSlide key={index}>
                                          <ProductSingle product={product} />
                                      </SwiperSlide>
                                  ))}
                                </Swiper>
                                <div className="tpproduct-btn">
                                    <div className="tpprduct-arrow tpproduct-btn__prv tpproduct-arrow-left"><a href="#"><i className="icon-chevron-left"></i></a></div>
                                    <div className="tpprduct-arrow tpproduct-btn__nxt tpproduct-arrow-right"><a href="#"><i className="icon-chevron-right"></i></a></div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TabFilterProducts;