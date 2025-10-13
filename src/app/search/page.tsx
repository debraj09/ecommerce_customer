import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-2";
import SearchArea from "@/components/search/search-area";
import Footer from "@/layouts/footer/footer";

export const metadata: Metadata = {
  title: "Search - Orfarm",
};

export default function SearchPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb-area-start */}
        <BreadcrumbTwo title="Search" bgClr="grey-bg" />
        {/* breadcrumb-area-end */}

        {/* search area start */}
        <SearchArea />
        {/* search area end */}

        {/* feature area start */}
        <FeatureArea />
        {/* feature area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
