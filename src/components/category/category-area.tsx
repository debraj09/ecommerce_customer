"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import "swiper/css";

// prop type
type IProps = {
  cls?: string;
  perView?: number;
  showCount?: boolean;
};

// Define the type for fetched category data
interface IApiCategory {
  id: number;
  name: string;
  image: string;
}

const CategoryArea = ({ cls, perView = 8, showCount = true }: IProps) => {
  const router = useRouter();
  const [categories, setCategories] = useState<IApiCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/category");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data", data)
        setCategories(data.data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategorySearch = (title: string) => {
    router.push(`/search?category=${title.split(" ").join("-").toLowerCase()}`);
  };

  const slider_setting = {
    slidesPerView: perView,
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    breakpoints: {
      "1400": { slidesPerView: perView },
      "1200": { slidesPerView: 6 },
      "992": { slidesPerView: 5 },
      "768": { slidesPerView: 4 },
      "576": { slidesPerView: 3 },
      "0": { slidesPerView: 2 },
    },
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <>
      <Swiper {...slider_setting} className={`swiper-container ${cls}`}>
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="category__item mb-30">
              <div className="category__thumb fix mb-15">
                <a onClick={() => handleCategorySearch(item.name)} className="pointer">
                  {item.image && (
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.name}
                    />
                  )}
                </a>
              </div>
              <div className="category__content">
                <h5 className="category__title">
                  <Link href="/shop">{item.name}</Link>
                </h5>
                {showCount && (
                  <span className="category__count">
                    0 items {/* This will need to be fetched dynamically as well */}
                  </span>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoryArea;