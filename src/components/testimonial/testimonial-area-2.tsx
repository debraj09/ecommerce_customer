"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// internal
import shape_1 from "@/assets/img/shape/tree-leaf-4.svg";
import shape_2 from "@/assets/img/shape/tree-leaf-5.svg";
import shape_3 from "@/assets/img/shape/tree-leaf-6.png";

// slider setting
export const slider_setting = {
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
    "1400": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".tptestimonial__nxt",
    prevEl: ".tptestimonial__prv",
  },
};

// testimonial data
export const testimonial_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/test-avata-1.png",
    desc: `"Also like the fact that I can pick my staples in the brown <br>
    paper packs and glass containers at the zero waste section, with an <br>
    idea to reduce plastic and also more convenient."`,
    name: "Algistino Lionel",
    position: "Web Designer at Blueskytechco",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/test-avata-2.png",
    desc: `"Also like the fact that I can pick my staples in the brown <br>
    paper packs and glass containers at the zero waste section, with an <br>
    idea to reduce plastic and also more convenient."`,
    name: "Jackson Roben",
    position: "Web Developer at Blueskytechco",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/test-avata-3.png",
    desc: `"Also like the fact that I can pick my staples in the brown <br>
    paper packs and glass containers at the zero waste section, with an <br>
    idea to reduce plastic and also more convenient."`,
    name: "Lionel",
    position: "UI/UX Designer at Blueskytechco",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/test-avata-2.png",
    desc: `"Also like the fact that I can pick my staples in the brown <br>
    paper packs and glass containers at the zero waste section, with an <br>
    idea to reduce plastic and also more convenient."`,
    name: "Mark Roben",
    position: "App Developer at Blueskytechco",
  },
];

const TestimonialAreaTwo = () => {
  return (
    <>
      <section
        className="testimonial-area tptestimonial__bg pt-115 pb-120 p-relative"
        style={{backgroundImage: "url(/assets/img/testimonial/testimonial-bg-1.jpg)"}}
      >
        <div className="container">
          <div className="testimonial__shape p-relative d-none d-md-block">
            <Image src={shape_1} alt="shape" className="testimonial__shape-one"/>
            <Image src={shape_2} alt="shape" className="testimonial__shape-two"/>
            <Image src={shape_3} alt="shape" className="testimonial__shape-three"/>
          </div>
          <Swiper
            {...slider_setting}
            modules={[Navigation]}
            className="swiper-container tptestimonial-active2 p-relative"
          >
            {testimonial_data.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="row justify-content-center p-relative">
                  <div className="col-md-12">
                    <div className="tptestimonial__item text-center ">
                      <div className="tptestimonial__avata mb-25">
                        <Image
                          src={item.user}
                          width={70}
                          height={70}
                          alt="user"
                        />
                      </div>
                      <div className="tptestimonial__content tptestimonial__content2">
                        <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                        <div className="tptestimonial__rating mb-5">
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                          <a href="#">
                            <i className="icon-star_outline1"></i>
                          </a>
                        </div>
                        <h4 className="tptestimonial__title">{item.name}</h4>
                        <span className="tptestimonial__avata-position">
                          {item.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="tptestimonial-arrow d-none d-md-block">
          <button className="testi-arrow tptestimonial__prv">
            <i className="icon-chevron-left"></i>
          </button>
          <button className="testi-arrow tptestimonial__nxt">
            <i className="icon-chevron-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaTwo;
