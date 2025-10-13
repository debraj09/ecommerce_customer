import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import BlogSlider from "@/components/blogs/blog-slider";
import BlogItemsThree from "@/components/blogs/blog-items-3";

export const metadata: Metadata = {
  title: "Blog - Orfarm",
};

export default function BlogPage() {
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
