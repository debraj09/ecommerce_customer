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

export default function ShopDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = [...product_data].find(
    (item) => item.id === Number(params.id)
  )!;
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbThree
          title={product.title}
          category={product.category.parent}
          bgClr="grey-bg"
        />
        {/* breadcrumb-area-end */}

        {/* shop details area start */}
        <ShopDetailsArea product={product} />
        {/* shop details area end */}

        {/* related product area start */}
        <RelatedProducts category={product.category.parent} />
        {/* related product area end */}

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
