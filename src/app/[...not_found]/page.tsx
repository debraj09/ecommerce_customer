import { Metadata } from "next";
import Image from "next/image";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import error_bg from '@/assets/img/shape/erorr-bg.png';
import error_shape from '@/assets/img/shape/erorr-shape.png';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found - Orfarm",
};

export default function NotFound() {
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
