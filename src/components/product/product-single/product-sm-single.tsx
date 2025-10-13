'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { IProductData } from "@/types/product-d-t";
import { averageRating, discountPercentage } from "@/utils/utils";

// prop type
type IProps = {
  product: IProductData;
};

const ProductSmSingle = ({ product }: IProps) => {
  let discount = 0;
  if (product.sale_price) {
    discount = discountPercentage(product.price, product.sale_price);
  }
  return (
    <div className="tpbrandproduct__item d-flex mb-20">
      <div className="tpbrandproduct__img p-relative">
        <Image src={product.image.original} alt="product-img" width={100} height={100} />
        <div className="tpproduct__info bage tpbrandproduct__bage">
          {discount > 0 && (
            <span className="tpproduct__info-discount bage__discount">
              -{discount.toFixed(0)}%
            </span>
          )}
        </div>
      </div>
      <div className="tpbrandproduct__contact">
        <span className="tpbrandproduct__product-title">
          <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
        </span>
        <div className="tpproduct__rating mb-5">
         <Rating allowFraction size={16} initialValue={averageRating(product.reviews)} readonly={true} />
        </div>
        <div className="tpproduct__price">
          <span>${product.sale_price ? product.sale_price : product.price} </span>
          {product.sale_price && <del>${product.price}</del>}
        </div>
      </div>
    </div>
  );
};

export default ProductSmSingle;
