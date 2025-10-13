import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import BlogSlider from "@/components/blogs/blog-slider";
import BlogItemsFour from "@/components/blogs/blog-items-4";

export const metadata: Metadata = {
  title: "Blog Left Sidebar - Orfarm",
};

export default function BlogLeftSidebarPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>

        {/* blog slider area start */}
        <BlogSlider/>
        {/* blog slider area end */}

        {/* blog items start */}
        <BlogItemsFour left_side={true}/>
        {/* blog items end */}

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
