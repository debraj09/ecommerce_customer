"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
// The 'next/image' import is removed as it causes build errors in this environment.
// Standard <img> tag will be used instead.

interface Banner {
  id: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  subtitle?: string;
}

const API_URL = 'https://ecomm.braventra.in/api/banners';
// Removed trailing slash for robust path concatenation in getAbsoluteImageUrl
const BASE_IMAGE_URL = "https://ecomm.braventra.in"; 

const HeroBanner = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  /**
   * Correctly constructs the absolute image URL.
   * This logic ensures exactly one slash separates the base URL and the relative path.
   */
  const getAbsoluteImageUrl = (relativePath: string) => {
    const base = BASE_IMAGE_URL.replace(/\/$/, '');
    // Ensure the relative path does not start with a slash if the base does not end with one
    const path = relativePath.startsWith('/') ? relativePath.substring(1) : relativePath;
    return `${base}/${path}`;
  };

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
            // Assign subtitles based on their position in the array
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

    fetchBanners();
  }, []);

  const handleNextSlide = useCallback(() => {
    if (banners.length === 0) return;
    setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  const handlePrevSlide = () => {
    if (banners.length === 0) return;
    setCurrentBannerIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };

  /**
   * Manages the auto-scroll interval.
   */
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(handleNextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [banners.length, handleNextSlide]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[550px] bg-gray-50 font-sans text-xl">
        <style>
          {`
            .loader {
              border: 5px solid #f3f3f3;
              border-top: 5px solid #8c1606;
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div className="flex flex-col items-center">
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

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 shadow-lg group" style={{ height: '100vh', minHeight: '600px' }}>

      <style jsx global>
        {`
          .slider-track {
            display: flex;
            height: 100%;
            width: ${banners.length * 100}%;
            transform: translateX(-${currentBannerIndex * (100 / banners.length)}%);
            transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .tpslider {
            min-width: ${100 / banners.length}%; 
            position: relative;
            height: 100%;
          }
          
          .full-width-image {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
          }
          
          /* Styles for the standard <img> replacement */
          .full-width-image img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Equivalent to style={{ objectFit: "cover" }} */
          }

          .content-below {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 2;
            padding: 40px 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
            height: 100%;
            display: flex;
            align-items: flex-end;
          }
          
          .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 15px; 
            width: 100%;
          }
          
          .tpslider__sub-title { 
            color: #7dd3fc; 
            font-size: 14px; 
            font-weight: 700; 
            text-transform: uppercase; 
            letter-spacing: 0.5px; 
            margin-bottom: 15px; 
            display: block; 
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          }
          
          .tpslider__title { 
            font-size: 48px; 
            font-weight: 700; 
            line-height: 1.2; 
            color: #fff; 
            margin-bottom: 20px; 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          }
          
          .tpslider__content p { 
            color: #fff; 
            font-size: 16px; 
            line-height: 1.6; 
            margin-bottom: 30px; 
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          }
          
          .tp-btn { 
            display: inline-block; 
            background-color: #92b02e; 
            color: #fff; 
            padding: 12px 25px; 
            border-radius: 5px; 
            text-decoration: none; 
            font-weight: 600; 
            transition: background-color 0.3s ease; 
          }
          
          .tp-btn:hover { 
            background-color: #8c1606; 
          }
          
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
            .tpslider__title { 
              font-size: 36px; 
            }
            
            .content-below {
              padding: 30px 0;
            }
            
            .slider-arrow { 
              width: 35px; 
              height: 35px; 
            }
            
            .slider-arrow.left { left: 15px; }
            .slider-arrow.right { right: 15px; }
          }
          
          @media (max-width: 768px) {
            .tpslider__title { 
              font-size: 28px; 
            }
            
            .content-below {
              padding: 20px 0;
            }
            
            .tpslider__content p {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .tpslider__title { 
              font-size: 24px; 
            }
            
            .tpslider__sub-title {
              font-size: 12px;
            }
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
            >
              {/* Full Screen Image Section */}
              <div className="full-width-image">
                {/* Replaced Next.js Image component with standard <img> */}
                <img
                  src={fullImageUrl}
                  alt={item.title}
                  // These styles are now handled by the .full-width-image img CSS rule
                  loading="lazy"
                  width="1920" // Placeholder size for layout stability
                  height="1080" // Placeholder size for layout stability
                />
              </div>

              {/* Content Overlay */}
              <div className="content-below">
                <div className="container">
                  <div className="tpslider__content text-center">
                    <span className="tpslider__sub-title">
                      {item.subtitle}
                    </span>
                    <h2
                      className="tpslider__title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h2>
                    <p 
                      style={{ marginTop: -10, color: 'white' }} 
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    <div className="tpslider__btn" style={{ marginTop: -20 }} >
                      <a className="tp-btn" href="/shop">
                        Shop Now
                      </a>
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
          <button onClick={handlePrevSlide} className="slider-arrow left" aria-label="Previous Slide" >
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
