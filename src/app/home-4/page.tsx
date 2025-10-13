import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import HeroBannerFour from "@/components/hero-banner/hero-banner-4";
import AboutAreaTwo from "@/components/about/about-area-2";
import AllProducts from "@/components/product/home/all-products";
import OfferCountdownBanner from "@/components/product/countdown-banner/offer-countdown-banner";
import BestProducts from "@/components/product/home-4/best-products";
import ProductBannerAreaFour from "@/components/banner/product-banner-area-4";
import TestimonialAreaTwo from "@/components/testimonial/testimonial-area-2";
import BlogItems from "@/components/blogs/blog-items";
import SubscribeArea from "@/components/subscribe/subscribe-area";
import FooterTwo from "@/layouts/footer/footer-2";

export const metadata: Metadata = {
  title: "Home Four - Orfarm",
};

export default function HomePageThree() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* hero start */}
        <HeroBannerFour />
        {/* hero end */}

        {/* about area start */}
        <AboutAreaTwo />
        {/* about area end */}

        {/* all products start */}
        <AllProducts style_2={true} />
        {/* all products end */}

        {/* deal offer start */}
        <OfferCountdownBanner bgClr="tpcoundown__bg-green" />
        {/* deal offer end */}

        {/* best products start */}
        <BestProducts />
        {/* best products end */}

        {/* product banner area start */}
        <ProductBannerAreaFour />
        {/* product banner area end */}

        {/* testimonial area start */}
        <TestimonialAreaTwo />
        {/* testimonial area end */}

        {/* blogs start */}
        <BlogItems spacing="pt-75 pb-30" bottom_show={false} />
        {/* blogs end */}

        {/* subscribe area start */}
        <SubscribeArea/>
        {/* subscribe area end */}
      </main>

      {/* footer start */}
      <FooterTwo/>
      {/* footer end */}
    </Wrapper>
  );
}
