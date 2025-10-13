import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import LocationAreaTwo from "@/components/location/location-area-2";

export const metadata: Metadata = {
  title: "Shop Location 2 - Orfarm",
};

export default function ShopLocationTwoPage() {
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
