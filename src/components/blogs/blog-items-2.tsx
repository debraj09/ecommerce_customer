"use client";
import React from "react";
import blog_data from "@/data/blog-data";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSingle from "./single/blog-single";

// slider setting 
const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  }
}

const BlogItemsTwo = () => {
  const blogs = [...blog_data];
  return (
    <section className="blog-area pt-100 pb-100 grey-bg">
    <div className="container">
       <div className="row">
          <div className="col-lg-12 text-center">
             <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Read Our Blog ~</h4>
                <h4 className="tpsection__title">Our Latest Post</h4>
                <p>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>
             </div>
          </div>
       </div>
       <Swiper {...slider_setting} className="swiper-container tpblog-active-2">
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogSingle blog={blog} bottom_show={true} />
          </SwiperSlide>
        ))}
       </Swiper>
    </div>
 </section>
  );
};

export default BlogItemsTwo;