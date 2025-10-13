import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import ShopArea from "@/components/shop/shop-area";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
  title: "Shop Right Sidebar - Orfarm",
};

export default function ShopRightSidebarPage() {
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
