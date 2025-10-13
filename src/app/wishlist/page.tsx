import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import WishlistArea from "@/components/wishlist/wishlist-area";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
  title: "Wishlist - Orfarm",
};

export default function WishlistPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Wishlist" />
        {/* breadcrumb-area-end */}

        {/* wishlist area start */}
        <WishlistArea/>
        {/* wishlist area end */}

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
