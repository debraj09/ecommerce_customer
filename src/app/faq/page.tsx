import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import FaqArea from "@/components/faq/faq-area";

export const metadata: Metadata = {
  title: "Faq - Orfarm",
};

export default function FaqPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbArea title="Faq" subtitle="Faq" />
        {/* breadcrumb-area-end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

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
