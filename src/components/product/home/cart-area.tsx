'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// cart box 
function CartBox ({img,lists}:{img:string,lists:string[]}) {
  return (
    <div className="tpcartitem">
      <div className="tpcartitem__thumb mb-15">
        <a href="#">
          <Image src={`/assets/img/cart/cart-${img}.jpg`} alt="cart-img" width={200} height={120}/>
        </a>
      </div>
      <div className="tpcartitem__content">
        <h3 className="tpcartitem__title mb-15">
          <Link href="/shop">Fresh Vegetables</Link>
        </h3>
        <ul>
          {
            lists.map((list,index) => (
              <li key={index}>{list}</li>
            ))
          }
        </ul>
        <span className="tpcartitem__all">
          <Link href="/shop">See All <i className="icon-chevron-right"></i></Link>
        </span>
      </div>
  </div>
  )
}


// slider setting 
const slider_setting = {
  slidesPerView: 6,
  observer: true,
  observeParents: true,
  spaceBetween: 40,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 6,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: '.tptestimonial-arrow-right',
    prevEl: '.tptestimonial-arrow-left',
  }
}

const cart_data = [
  {
    img:'1',
    lists:[
      'Exotic Fruits & Veggies',
      'Fresh Fruits',
      'Fresh Vegetables',
      'Herbs & Seasonings'
    ]
  },
  {
    img:'2',
    lists:[
      'Exotic Fruits & Veggies',
      'Fresh Fruits',
      'Fresh Vegetables',
      'Herbs & Seasonings'
    ]
  },
  {
    img:'3',
    lists:[
      'Exotic Fruits & Veggies',
      'Fresh Fruits',
      'Fresh Vegetables',
      'Herbs & Seasonings'
    ]
  },
  {
    img:'4',
    lists:[
      'Exotic Fruits & Veggies',
      'Fresh Fruits',
      'Fresh Vegetables',
      'Herbs & Seasonings'
    ]
  },
  {
    img:'5',
    lists:[
      'Exotic Fruits & Veggies',
      'Fresh Fruits',
      'Fresh Vegetables',
      'Herbs & Seasonings'
    ]
  },
  {
    img:'6',
    lists:[
      'Exotic Fruits & Veggies',
      'Fresh Fruits',
      'Fresh Vegetables',
      'Herbs & Seasonings'
    ]
  }
]

// prop type 
type IProps = {
  cls?: string;
}

const CartArea = ({cls}: IProps) => {
  return (
   <section className={`cart-area ${cls?cls:'pt-30'}`}>
      <div className="container">
          <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container product-details-active">
                {
                  cart_data.map((data, index) => (
                    <SwiperSlide key={index}>
                      <CartBox img={data.img} lists={data.lists}/>
                    </SwiperSlide>
                  ))
                }
          </Swiper>
      </div>
    </section>
  );
};

export default CartArea;