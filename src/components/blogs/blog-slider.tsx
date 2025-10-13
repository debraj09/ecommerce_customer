'use client';
import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';


// slider setting 
const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
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

const BlogSlider = () => {
  const blog_items = [...blog_data].slice(0, 4);
  return (
    <section className="blog-area pt-30">
        <div className="container-fluid">
          <Swiper {...slider_setting} className="swiper-container blog-active-3">
            {blog_items.map((blog, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <div className="tpblog__single p-relative">
                      <div className="tpblog__single-img">
                          <Image src={blog.image} alt="blog-img" width={606} height={378} style={{ height: "auto", width: "100%" }}/>
                      </div>
                      <div className="tpblog__single-text text-center">
                          <div className="tpblog__entry-wap">
                            <span className="cat-links"><Link href={`/blog-details/${blog.id}`}>{blog.category}</Link></span>
                            <span className="author-by"><a href="#">{blog.author}</a></span>
                            <span className="post-data"><a href="#">{blog.date}</a></span>
                          </div>
                          <h4 className="tpblog__single-title mb-20">
                            <Link href={`/blog-details/${blog.id}`} dangerouslySetInnerHTML={{ __html: blog.title }}></Link>
                          </h4>
                          <Link href={`/blog-details/${blog.id}`}>Continue reading</Link>
                      </div>
                    </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
};

export default BlogSlider;