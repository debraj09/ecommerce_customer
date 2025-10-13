import React from "react";
import Image from "next/image";
import CategoryFilter from "./filter/category-filter";
import PriceFilter from "./filter/price-filter";
import ColorFilter from "./filter/color-filter";
import BrandFilter from "./filter/brand-filter";
import RatingFilter from "./filter/rating-filter";
import ResetFilter from "./filter/reset-filter";

// prop type 
type IProps = {
  shop_right?: boolean;
}

const ShopSidebar = ({shop_right}: IProps) => {
  return (
    <div>
      <div className={`tpshop__leftbar ${shop_right?'tpshop__leftbar-area':''}`}>
        {/* category filter start */}
        <CategoryFilter />
        {/* category filter end */}

        {/* price filter */}
        <PriceFilter />
        {/* price filter */}

        {/* color filter start */}
        <ColorFilter />
        {/* color filter end */}

        {/* brand filter start */}
        <BrandFilter />
        {/* brand filter end */}
        {/* range filter start */}
        <RatingFilter />
        {/* range filter end */}

        {/* reset filter */}
        <ResetFilter/>
        {/* reset filter */}
      </div>
      <div className={`tpshop__widget ${shop_right?'tpshop__leftbar-area':''}`}>
        <div className="tpshop__sidbar-thumb mt-35">
          <Image src="/assets/img/shape/sidebar-product-1.png" alt="img" width={270} height={460} style={{height: 'auto'}} />
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
