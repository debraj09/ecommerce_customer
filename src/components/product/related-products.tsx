"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import product_data from "@/data/product-data";
import ProductSingle from "./product-single/product-single";

// slider setting
const slider_setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 4,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".tpproduct-btn__nxt",
    prevEl: ".tpproduct-btn__prv",
  },
};
// prop type
type IProps = {
  category: string;
};

const RelatedProducts = ({ category }: IProps) => {
  const related_products = [...product_data].filter(
    (p) => p.category.parent.toLowerCase() === category.toLowerCase()
  );
  return (
    <section className="product-area whight-product pt-75 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="tpdescription__product-title mb-20">
              Related Products
            </h5>
          </div>
        </div>
        <div className="tpproduct__arrow double-product p-relative">
          <Swiper
            {...slider_setting}
            modules={[Navigation]}
            className="swiper-container tpproduct-active tpslider-bottom p-relative"
          >
            {related_products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductSingle product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
