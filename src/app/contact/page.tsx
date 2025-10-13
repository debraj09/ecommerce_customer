import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import ContactArea from "@/components/contact/contact-area";
import ContactMapForm from "@/components/contact/contact-map-form";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";

export const metadata: Metadata = {
  title: "Contact - Orfarm",
};

export default function ContactPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Contact Us" />
        {/* breadcrumb-area-end */}

        {/* contact area start */}
        <ContactArea />
        {/* contact area end */}

        {/* contact map form start */}
        <ContactMapForm />
        {/* contact map form end */}

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
