"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade,Pagination } from "swiper/modules";
import Link from "next/link";
// internal
import { hero_slider_six_data } from "@/data/hero-slider-data";

// slider setting
const slider_setting = {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.tpslider__nxt6',
    prevEl: '.tpslider__prv6',
  },
  pagination: {
    el: ".slider-pagination-6",
    clickable: true,
  }
}

const HeroBannerSix = () => {
  return (
    <section className="slider-area tpslider-delay">
      <Swiper {...slider_setting} modules={[Navigation, EffectFade,Pagination]} className="swiper-container tp-slider6">
        {hero_slider_six_data.map((item, i) => (
            <SwiperSlide key={i} className="tpslider__bg6" style={{backgroundImage: `url(${item.bg_img})`}}>
                <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                        <div className="tpslider__five__wrapper pt-130 text-center">
                            <div className="tpslider__five__brand mb-10">
                              <Image src={item.logo} alt="logo" width={150} height={135}/>
                            </div>
                            <div className="tpslider__five__contact">
                              <h3 className="tpslider__five__title mb-25">{item.subtitle}</h3>
                              <p>{item.title}</p>
                              <div className="tpslider__five__btn">
                                  <Link className="tp-btn" href="/shop">Shop Now</Link>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </SwiperSlide>
        ))}
            <div className="tpslider__arrow d-none  d-xxl-block">
                  <button className="tpsliderarrow tpslider__arrow-prv tpslider__prv6">
                    <i className="icon-chevron-left"></i>
                  </button>
                  <button className="tpsliderarrow tpslider__arrow-nxt tpslider__nxt6">
                    <i className="icon-chevron-right"></i>
                  </button>
              </div>
        <div className="slider-pagination-6"></div>
      </Swiper>
    </section>
  );
};

export default HeroBannerSix;