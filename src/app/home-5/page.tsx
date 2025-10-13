import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import HeroBannerFive from "@/components/hero-banner/hero-banner-5";
import AboutAreaThree from "@/components/about/about-area-3";
import AllProducts from "@/components/product/home/all-products";
import ProductFeatureArea from "@/components/product/feature/product-feature-area";
import OfferCountdownBanner from "@/components/product/countdown-banner/offer-countdown-banner";
import BestProducts from "@/components/product/home-4/best-products";
import BlogItemsTwo from "@/components/blogs/blog-items-2";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";


export const metadata: Metadata = {
  title: "Home Three - Orfarm",
};

export default function HomePageFive() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* hero start */}
        <HeroBannerFive />
        {/* hero end */}

        {/* about area start */}
        <AboutAreaThree />
        {/* about area end */}

        {/* all products start */}
        <AllProducts style_3={true} />
        {/* all products end */}

        {/* product feature area start */}
        <ProductFeatureArea style_2={true} />
        {/* product feature area end */}

        {/* deal area start */}
        <OfferCountdownBanner bgClr="no-bg" />
        {/* deal area end */}

        {/* best products start */}
        <BestProducts />
        {/* best products end */}

        {/* blogs start */}
        <BlogItemsTwo />
        {/* blogs end */}

        {/* feature area start */}
        <FeatureArea style_2={true} bg_img={false} />
        {/* feature area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
