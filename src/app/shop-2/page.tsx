import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import ShopAreaTwo from "@/components/shop/shop-area-2";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
  title: "Shop 2 - Orfarm",
};

export default function ShopPageTwo() {
  return (
    <Wrapper>
      <Header />

      {/* <main>
        <BreadcrumbTwo title="Shop" bgClr="grey-bg" />

        <ShopAreaTwo />

        <FeatureArea style_2={true} />
      </main> */}

      <Footer />
    </Wrapper>
  );
}
