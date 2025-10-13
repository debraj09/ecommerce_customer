'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const slider_setting = {
  slidesPerView: 6,
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
    "1400": {
      slidesPerView: 6,
    },
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
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

// instagram images
const instagram_data = [
  { link: "https://www.instagram.com", img: "/assets/img/insta/insta-1.jpg" },
  { link: "https://www.instagram.com", img: "/assets/img/insta/insta-2.jpg" },
  { link: "https://www.instagram.com", img: "/assets/img/insta/insta-3.jpg" },
  { link: "https://www.instagram.com", img: "/assets/img/insta/insta-4.jpg" },
  { link: "https://www.instagram.com", img: "/assets/img/insta/insta-5.jpg" },
  { link: "https://www.instagram.com", img: "/assets/img/insta/insta-6.jpg" },
];

const InstagramArea = () => {
  return (
    <section className="instagram-area grey-bg pt-70 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="tpsection mb-35">
              <h4 className="tpsection__title">@Orfarm</h4>
              <p>
                Tag <Link href="/">@orfarm</Link> in your Instagram photos
                for a chance to be featured here. <br /> Find more inspiration
                on our Instagram.
              </p>
            </div>
          </div>
        </div>
        <Swiper {...slider_setting} className="swiper-container tpinsta-active">
          {instagram_data.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="tpinsta__item p-relative fix">
                <a href={data.link} target="_blank">
                  <Image
                    src={data.img}
                    alt="thumb-img"
                    width={320}
                    height={320}
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a
                  className="tpinsta__links popup-image"
                  href={data.link}
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramArea;
