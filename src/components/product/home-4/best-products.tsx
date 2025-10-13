import React from "react";
import product_data from "@/data/product-data";
import { discountPercentage, isHot } from "@/utils/utils";
import ProductSmSingle from "../product-single/product-sm-single";

const BestProducts = () => {
  const products = [...product_data].filter(
    (p) => discountPercentage(p.price, p.sale_price!) > 0 || isHot(p.updated_at)
  );
  return (
    <section className="brand-product pt-75 pb-60">
      <div className="container">
        <div className="white-bg pb-40 brand-product">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tpsection mb-35">
                <h4 className="tpsection__sub-title">~ Best Products ~</h4>
                <h4 className="tpsection__title">This week’s highlights</h4>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue
                  doming quod mazim.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-3">
            {products.slice(0,9).map((p, i) => (
              <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                <ProductSmSingle product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
