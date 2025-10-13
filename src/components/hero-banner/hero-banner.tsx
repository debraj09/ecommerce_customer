"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
// 1. IMPORT Next.js Image Component
import Image from 'next/image';

// Define the structure for a banner item
interface Banner {
  id: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  subtitle?: string; // Mocked for design consistency
}

// API Configuration
// NOTE: For Next.js image optimization, the base URL must be added to next.config.js
const API_URL = 'http://localhost:3000/api/banners';
const BASE_IMAGE_URL = "http://localhost:3000";

const HeroBanner = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  /**
   * Helper function to correctly construct the absolute image URL.
   */
  const getAbsoluteImageUrl = (relativePath: string) => {
    const base = BASE_IMAGE_URL.replace(/\/$/, '');
    const path = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
    return base + path;
  };

  // 1. Fetch data dynamically
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const apiResponse = await response.json();

        if (apiResponse.status === 200 && apiResponse.data) {
          const processedBanners: Banner[] = apiResponse.data.map((banner: Banner, index: number) => ({
            ...banner,
            subtitle: index === 0 ? "TOP SELLER IN THE WEEK" : (index === 1 ? "SEASONAL DEALS" : "WELLNESS TIPS")
          }));
          setBanners(processedBanners);
        } else {
          setBanners([]);
          setError("API responded successfully, but no banners were found.");
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
        setError("Failed to connect to the banner API. Check server status.");
      } finally {
        setLoading(false);
      }
    };

    const loadTimeout = setTimeout(fetchBanners, 100);
    return () => clearTimeout(loadTimeout);
  }, []);

  // 2. Manual Carousel Navigation Logic
  const handleNextSlide = useCallback(() => {
    if (banners.length === 0) return;
    setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  const handlePrevSlide = () => {
    if (banners.length === 0) return;
    setCurrentBannerIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };
  
  // 3. Carousel logic for auto-sliding (updated to reset on manual navigation)
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners.length, currentBannerIndex, handleNextSlide]);

  // UPDATED: Loading state with a spinner icon and centering
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[550px] bg-gray-50 font-sans text-xl">
        <style>
          {`
            /* --- START: LOADING SPINNER STYLES --- */
            .loader {
              border: 5px solid #f3f3f3; /* Light grey circle */
              border-top: 5px solid #8c1606; /* Maroon color from your theme */
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            /* --- END: LOADING SPINNER STYLES --- */
          `}
        </style>
        <div style={{paddingTop:20,paddingBottom:20,marginLeft:'50%'}} className="flex flex-col items-center">
          <div className="loader"></div>
          <span className="mt-4 font-medium text-gray-600">Loading banners...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[550px] bg-red-100 font-sans p-4">
        <p className="text-red-700 text-lg font-bold">Error: {error}</p>
      </div>
    );
  }

  if (banners.length === 0) {
    return <div className="flex items-center justify-center h-[550px] bg-gray-50 font-sans text-xl text-gray-500">No banners available to display.</div>;
  }
  
  // Define fallback image properties based on your CSS (.tpslider__thumb)
  // Your CSS defines max-width: 600px and height: 400px for desktop.
  const imageWidth = 600; 
  const imageHeight = 400;

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 min-h-[550px] shadow-lg group">
      
      <style>
        {`
          /* ... CSS styles remain unchanged ... */
          .slider-track {
            display: flex;
            height: 100%;
            width: ${banners.length * 100}%;
            transform: translateX(-${currentBannerIndex * (100 / banners.length)}%);
            transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .tpslider {
            min-width: ${100 / banners.length}%; 
            padding: 90px 0;
            background-color: #f5f5f5;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            min-height: 550px;
          }
          
          .container { max-width: 1200px; margin: 0 auto; padding: 0 15px; height: 100%; }
          .row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; margin: 0 -15px; height: 100%; }
          .col-content { flex: 0 0 45%; max-width: 45%; padding: 0 15px; }
          .col-thumb { flex: 0 0 55%; max-width: 55%; padding: 0 15px; display: flex; justify-content: flex-end; align-items: center; }
          
          .tpslider__thumb { position: relative; width: 100%; max-width: ${imageWidth}px; height: ${imageHeight}px; border-radius: 8px; overflow: hidden; }
          /* REMOVED .tpslider__thumb-img STYLES AS NEXT/IMAGE HANDLES SIZING */
          
          .tpslider__sub-title { color: #8c1606; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 15px; display: block; }
          .tpslider__title { font-size: 48px; font-weight: 700; line-height: 1.2; color: #272848; margin-bottom: 20px; }
          .tpslider__content p { color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px; }
          .tp-btn { display: inline-block; background-color: #92b02e; color: #fff; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: 600; transition: background-color 0.3s ease; }
          .tp-btn:hover { background-color: #8c1606; }
          
          .slider-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            color: #272848;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
          }
          .group:hover .slider-arrow {
            opacity: 1;
            visibility: visible;
          }
          .slider-arrow:hover {
            background-color: #fff;
            color: #8c1606;
            transform: translateY(-50%) scale(1.1);
          }
          .slider-arrow.left { left: 25px; }
          .slider-arrow.right { right: 25px; }
          
          @media (max-width: 1024px) {
            .col-content { max-width: 100%; flex: 0 0 100%; order: 2; text-align: center; }
            .col-thumb { max-width: 100%; flex: 0 0 100%; order: 1; margin-bottom: 20px; justify-content: center; }
            .tpslider__thumb { height: 300px; max-width: 500px; margin: 0 auto; }
            .tpslider__title { font-size: 36px; }
            .tpslider { min-height: 700px; padding: 40px 0; }
            .slider-arrow { width: 35px; height: 35px; }
            .slider-arrow.left { left: 15px; }
            .slider-arrow.right { right: 15px; }
          }
        `}
      </style>

      <div className="slider-track">
        {banners.map((item) => {
          const fullImageUrl = getAbsoluteImageUrl(item.image_url);
          return (
            <div
              key={item.id}
              className="tpslider"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-content">
                    <div className="tpslider__content">
                      <span className="tpslider__sub-title">
                        {item.subtitle}
                      </span>
                      <h2
                        className="tpslider__title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></h2>
                      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      <div className="tpslider__btn">
                        <a className="tp-btn" href="/shop">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-thumb">
                    <div className="tpslider__thumb relative">
                      {/* 2. REPLACED <img> with <Image /> */}
                      <Image
                        className="tpslider__thumb-img" // Keep your CSS class for styling
                        src={fullImageUrl}
                        alt={item.title}
                        width={imageWidth} // Mandatory prop: Define the intrinsic width
                        height={imageHeight} // Mandatory prop: Define the intrinsic height
                        quality={80} // Optional: Adjust quality
                        priority={currentBannerIndex === item.id - 1} // Optional: Prioritize loading the current slide
                        // The onError is NOT needed with next/image since you must configure the domain
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {banners.length > 1 && (
        <>
          <button onClick={handlePrevSlide} className="slider-arrow left" aria-label="Previous Slide">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNextSlide} className="slider-arrow right" aria-label="Next Slide">
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </section>
  );
};

export default HeroBanner;