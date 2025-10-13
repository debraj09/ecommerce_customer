'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProductData } from "@/types/product-d-t";
import { useAppDispatch } from "@/redux/hook";
import { reset } from "@/redux/features/filter";
import ProductListItem from "../product/product-single/product-list-item";
import ProductSingle from "../product/product-single/product-single";

// prop type
type IProps = {
  products: IProductData[];
  activeTab: string;
  currentItems: IProductData[];
};

const ShopItems = ({ products, activeTab, currentItems }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {/* if no item in product */}
      {products.length === 0 && (
        <div className="cartmini__empty text-center mt-80">
          <div className="mb-30">
            <Image
              src="/assets/img/cart/empty-cart.png"
              alt="empty-cart-img"
              width={283}
              height={171}
            />
          </div>
          <h4>Sorry! Could not find the product you were looking For!!!</h4>
          <p>
            Please check if you have misspelt something or try searching with
            other words.
          </p>
          <button onClick={() => dispatch(reset())} className="tpslider__btn">
            <Link href="/shop" className="tp-btn">
              Continue Shopping
            </Link>
          </button>
        </div>
      )}
      {/* if no item in product */}

      <div
        className={`row ${
          activeTab === "three-col"
            ? "row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item"
            : activeTab === "four-col"
            ? "row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct__shop-item"
            : ""
        }`}
      >
        {currentItems.map((p, i) => (
          <div
            key={i}
            className={`${activeTab === "list" ? "col-lg-12" : "col mb-20"}`}
          >
            {activeTab === "list" ? (
              <ProductListItem product={p} />
            ) : (
              <ProductSingle product={p} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
