import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-2";
import AboutArea from "@/components/about/about-area";
import AllProducts from "@/components/product/home/all-products";
import ChooseArea from "@/components/choose-us/choose-area";
import AllProductArea from "@/components/product/home-2/all-product-area";
import BlogItems from "@/components/blogs/blog-items";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
  title: "Home Two - Orfarm",
};

export default function HomePageTwo() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* hero start */}
        <HeroBannerTwo />
        {/* hero end */}

        {/* about area start */}
        <AboutArea />
        {/* about area end */}

        {/* all products start */}
        <AllProducts style_2={true} />
        {/* all products end */}

        {/* choose area start */}
        <ChooseArea />
        {/* choose area end */}

        {/* all products start */}
        <AllProductArea />
        {/* all products end */}

        {/* blogs start */}
        <BlogItems spacing="pb-30" bottom_show={false} />
        {/* blogs end */}

        {/* feature area start */}
        <FeatureArea style_2={true} />
        {/* feature area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
