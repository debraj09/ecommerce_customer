"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider_setting, testimonial_data } from "./testimonial-area-2";
import Image from "next/image";

const TestimonialAreaThree = () => {
  return (
    <section className="testimonial-area tptestimonial__bg pt-80 pb-55 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="tpsection mb-35">
              <h4 className="tpsection__sub-title">~ Happy Customer ~</h4>
              <h4 className="tpsection__title">What Client Says</h4>
              <p>
                The liber tempor cum soluta nobis eleifend option congue doming
                quod mazim.
              </p>
            </div>
          </div>
        </div>
        <Swiper
          {...slider_setting}
          spaceBetween={30}
          className="swiper-container tptestimonial-active3 p-relative"
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
    </section>
  );
};

export default TestimonialAreaThree;
