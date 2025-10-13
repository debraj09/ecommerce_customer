'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductSingle from '../product-single/product-single';
import product_data from '@/data/product-data';
import { IProductData } from '@/types/product-d-t';

// slider setting 
const slider_setting = {
  slidesPerView: 6,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 6,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.tpproduct-btn__nxt',
    prevEl: '.tpproduct-btn__prv',
  }
}

// tabs
const tabs = ['All Products','Fruit Drink','Fresh Fruits','Vegetables'];
// weekly-product-area whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix
// prop type 
type IProps = {
  style_2?: boolean;
  style_3?: boolean;
}
const AllProducts = ({style_2=false,style_3=false}:IProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [products, setProducts] = React.useState<IProductData[]>([...product_data]);

  const handleFilter = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'All Products') {
      setProducts([...product_data]);
    } else {
      setProducts([...product_data].filter((p) => p.category.parent.toLowerCase() === tab.toLowerCase()));
    }
  }

  return (
    <>
    <section className={`weekly-product-area ${style_2 ? 'whight-product pt-75 pb-75' : style_3 ? 'whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix' : 'grey-bg pb-70'}`}>
      <div className={`${style_3 ? 'container-fluid' : 'container'}`}>
          <div className="row">
            <div className="col-lg-12 text-center">
                <div className="tpsection mb-20">
                  <h4 className="tpsection__sub-title">~ Special Products ~</h4>
                  <h4 className="tpsection__title">Weekly Food Offers</h4>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <div className="tpnavtab__area pb-40">
                  <nav>
                      <div className="nav nav-tabs" id="nav-tab">
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

                    <div className="tpproduct__arrow p-relative">
                        <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active tpslider-bottom p-relative">
                        {products.map((product, index) => (
                          <SwiperSlide key={index}>
                            <ProductSingle product={product} />
                          </SwiperSlide>
                        ))}
                        </Swiper>
                        <div className="tpproduct-btn">
                          <div className="tpprduct-arrow tpproduct-btn__prv"><a href="#"><i className="icon-chevron-left"></i></a></div>
                          <div className="tpprduct-arrow tpproduct-btn__nxt"><a href="#"><i className="icon-chevron-right"></i></a></div>
                        </div>
                    </div>

                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <div className="tpproduct__all-item text-center">
                  <span>Discover thousands of other quality products. 
                      <Link href="/shop">Shop All Products <i className="icon-chevrons-right"></i></Link>
                  </span>
                </div>
            </div>
          </div>
      </div>
    </section>   
    </>
  );
};

export default AllProducts;