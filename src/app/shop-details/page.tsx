import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import product_data from "@/data/product-data";
import Footer from "@/layouts/footer/footer";
import ShopDetailsArea from "@/components/shop-details/shop-details-area";
import RelatedProducts from "@/components/product/related-products";

export const metadata: Metadata = {
  title: "Shop Details - Orfarm",
};

export default function ShopDetailsPage() {
  const product = [...product_data][0];
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
