import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import HeroBannerSix from "@/components/hero-banner/hero-banner-6";
import CartArea from "@/components/product/home/cart-area";
import AllProducts from "@/components/product/home/all-products";
import ProductBannerAreaFive from "@/components/banner/product-banner-area-5";
import HighlightProducts from "@/components/product/home-6/all-products";
import OfferCountdownBannerTwo from "@/components/product/countdown-banner/offer-countdown-banner-2";
import TestimonialAreaTwo from "@/components/testimonial/testimonial-area-2";
import InstagramArea from "@/components/instagram/instagram-area";
import SubscribeArea from "@/components/subscribe/subscribe-area";
import FooterTwo from "@/layouts/footer/footer-2";

export const metadata: Metadata = {
  title: "Home Three - Orfarm",
};

export default function HomePageSix() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* hero start */}
        <HeroBannerSix />
        {/* hero end */}

        {/* cart area start */}
        <CartArea cls="grey-bg pt-80 pb-75" />
        {/* cart area end */}

        {/* all products start */}
        <AllProducts style_2={true} />
        {/* all products end */}

        {/* product banner area start */}
        <ProductBannerAreaFive />
        {/* product banner area end */}

        {/* Highlight Products area start */}
        <HighlightProducts />
        {/* Highlight Products area end */}

        {/* offer countdown start */}
        <OfferCountdownBannerTwo />
        {/* offer countdown end */}

        {/* testimonial start */}
        <TestimonialAreaTwo />
        {/* testimonial end */}

        {/* instagram area start */}
        <InstagramArea />
        {/* instagram area end */}

        {/* subscribe area start */}
        <SubscribeArea cls="grey-bg" />
        {/* subscribe area end */}
      </main>

      {/* footer start */}
      <FooterTwo />
      {/* footer end */}
    </Wrapper>
  );
}
