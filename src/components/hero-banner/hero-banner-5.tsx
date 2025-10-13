"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade,Pagination } from "swiper/modules";
// internal
import { hero_slider_five_data } from "@/data/hero-slider-data";
import shape_1 from "@/assets/img/slider/slider-shape-1.png";
import shape_3 from "@/assets/img/slider/slider-shape-3.png";
import shape_4 from "@/assets/img/slider/slider-shape-4.png";
import fruit_1 from '@/assets/img/shape/fruits-1.png';
import fruit_2 from '@/assets/img/shape/fruits-2.png';
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
  }
}

// img style
const img_style = {
  width: "auto",
  height: "auto",
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

const HeroBannerFive = () => {
  return (
   <section className="slider-area tpslider-delay secondary-sliderbg">
      <Swiper {...slider_setting} modules={[Navigation, EffectFade,Pagination]} className="swiper-container slider-active">
            {hero_slider_five_data.map((item,i) => (
              <SwiperSlide key={i}>
                <div className="tpslider pt-90 pb-0 grey-bg tpslider__bg2" style={{backgroundImage: `url(/assets/img/slider/shape-bg-2.jpg)`}} data-background="">
                  <div className="container">
                      <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-7">
                            <div className="tpslider__content p-relative">
                              <span className="tpslider__sub-title mb-35">Top Seller In The Week</span>
                              <h2 className="tpslider__title mb-30">Perfect <br/> Your Healthy Life.</h2>
                              <p>Presentation matters. Our fresh Vietnamese vegetable rolls <br/> look good and taste even better</p>
                              <div className="tpslider__btn">
                                  <Link className="tp-btn" href="/shop">Shop Now</Link>
                              </div>
                              <Image className="tpslider__shape-fruits1 d-none d-md-block" src={fruit_1} alt="fruit-img"/>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-5">
                            <div className="tpslider__thumb p-relative pt-100">
                              <Image className="tpslider__thumb-img" src={item.bg_img} alt="slider-bg" width={746} height={645} style={img_style}/>
                              <div className="tpslider__shape">
                                  <ShapeImg img={shape_1} cls="tpslider__shape-one" />
                                  <ShapeImg img={shape_3} cls="tpslider__shape-three" />
                                  <ShapeImg img={shape_4} cls="tpslider__shape-four" />
                                  <Image className="tpslider__shape-five" src={fruit_2} alt="fruit-img"/>
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
  );
};

export default HeroBannerFive;