"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade,Pagination } from "swiper/modules";
import { hero_slider_three_data } from "@/data/hero-slider-data";
import shape_1 from '@/assets/img/slider/slider-shape-5.png';
import shape_2 from '@/assets/img/slider/slider-shape-6.png';
import Link from "next/link";

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.tpslider__arrow-prv',
    prevEl: '.tpslider__arrow-nxt',
  },
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
}

// img style
const img_style = {
  width: "100%",
  height: "100%",
};

const HeroBannerThree = () => {
  return (
    <>
     <section className="slider-area tpslider__home-3 tpslider-delay grey-bg slider-three">
      <Swiper {...slider_setting} modules={[Navigation, EffectFade]} className="swiper-container slider-active">
        {hero_slider_three_data.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="tpslider grey-bg">
                  <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                            <div className="tpslider__content slider-three-content text-center">
                              <span className="tpslider__sub-title mb-15">{item.subtitle}</span>
                              <h2 className="tpslider__title mb-25" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                              <p dangerouslySetInnerHTML={{ __html: item.sm_desc }}></p>
                              <div className="tpslider__btn">
                                  <Link className="tp-btn" href="/shop">Shop Now</Link>
                              </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                            <div className="tpslider__thumb p-relative">
                              <Image className="tpslider__thumb-img tpslider__three" src={item.bg_img} alt="slider-bg" width={654} height={713} style={img_style}/>
                              <div className="tpslider__shape d-none d-lg-block">
                                  <Image className="tpslider__shape-three three-shap-one" src={shape_1} alt="shape" style={{height: "auto"}}/>
                                  <Image className=" three-shap-two" src={shape_2} alt="shape" style={{height: "auto"}}/>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </SwiperSlide>
        ))}
            
          <div className="tpslider__arrow d-none  d-xxl-block">
            <button className="tpsliderarrow tpslider__arrow-prv"><i className="icon-chevron-left"></i></button>
            <button className="tpsliderarrow tpslider__arrow-nxt"><i className="icon-chevron-right"></i></button>
          </div>
      </Swiper>
    </section> 
    </>
  );
};

export default HeroBannerThree;