"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { hero_slider_two_data } from "@/data/hero-slider-data";
// internal
import shape_1 from "@/assets/img/slider/slider-shape-1.png";
import shape_2 from "@/assets/img/slider/slider-shape-2.png";
import shape_3 from "@/assets/img/slider/slider-shape-3.png";
import shape_4 from "@/assets/img/slider/slider-shape-4.png";
import Link from "next/link";

// SLIDER SETTING
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

function ShapeImg({ img, cls }: { img: StaticImageData; cls: string }) {
  return (
    <Image
      className={cls}
      src={img}
      alt="shape"
      style={{ width: "auto", height: "auto" }}
    />
  );
}

export default function HeroBannerTwo () {
  return (
    <section className="slider-area tpslider-delay secondary-sliderbg">
      <Swiper {...slider_setting} modules={[Navigation, EffectFade]} className="swiper-container slider-active">
        {hero_slider_two_data.map((item,i) => (
            <SwiperSlide key={i}>
                <div className="tpslider pt-90 pb-0 grey-bg" 
                style={{backgroundImage: `url(/assets/img/slider/shape-bg-2.jpg)`}}>
                  <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                            <div className="tpslider__content pt-20">
                              <span className="tpslider__sub-title mb-35">{item.subtitle}</span>
                              <h2 className="tpslider__title mb-30" 
                              dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                              <p dangerouslySetInnerHTML={{ __html: item.sm_desc }}></p>
                              <div className="tpslider__btn">
                                  <Link className="tp-btn" href="/shop">Shop Now</Link>
                              </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                            <div className="tpslider__thumb p-relative pt-70">
                              <Image
                                className="tpslider__thumb-img"
                                src={item.bg_img}
                                width={740}
                                height={529}
                                alt="slider-bg"
                                style={img_style}
                              />
                              <div className="tpslider__shape d-none d-md-block">
                              <ShapeImg img={shape_1} cls="tpslider__shape-one" />
                              <ShapeImg img={shape_2} cls="tpslider__shape-two" />
                              <ShapeImg img={shape_3} cls="tpslider__shape-three" />
                              <ShapeImg img={shape_4} cls="tpslider__shape-four" />
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </SwiperSlide>
        ))}
          <div className="slider-pagination"></div>
      </Swiper>
    </section>
  )
}