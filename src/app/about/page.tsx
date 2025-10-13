import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import AboutAreaFour from "@/components/about/about-area-4";
import AboutArea from "@/components/about/about-area";
import AboutAreaThree from "@/components/about/about-area-3";
import AboutVideoArea from "@/components/about/about-video-area";
import ChooseArea from "@/components/choose-us/choose-area";
import FeatureArea from "@/components/feature/feature-area";
import TestimonialAreaThree from "@/components/testimonial/testimonial-area-3";
import Footer from "@/layouts/footer/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Orfarm",
};

export default function AboutPage() {
  return (
  <Wrapper>
      <Header />

      {/* <main>
        <BreadcrumbTwo title="Shop" bgClr="grey-bg" />

        <ShopArea category_style={true} />

        <FeatureArea style_2={true} />
      </main> */}

      <Footer />
    </Wrapper>
  );
}
