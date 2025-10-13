"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { IProductData } from "@/types/product-d-t";
import { averageRating, discountPercentage, isHot } from "@/utils/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product } from "@/redux/features/cart";
import { add_to_wishlist } from "@/redux/features/wishlist";
import { add_to_compare } from "@/redux/features/compare";

// image style
const imgStyle = {
  width: "100%",
  height: "100%",
};

// prop type
type IProps = {
  product: IProductData;
};

const ProductListItem = ({ product }: IProps) => {
  const {image,price,sale_price,title,updated_at,quantity,sold,category,unit,reviews,productInfoList} = product || {};
  let discount = 0;
  if (sale_price) {
    discount = discountPercentage(price, sale_price);
  }
  const [isItemAddToCart, setIsItemAddToCart] = useState(false);
  const [isCompareAdd, setIsCompareAdd] = useState(false);
  const [isWishlistAdd, setIsWishlistAdd] = useState(false);
  const { cart_products } = useAppSelector((state) => state.cart);
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { compare_products } = useAppSelector((state) => state.compare);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsItemAddToCart(cart_products.some((i) => i.id === product.id));
    setIsWishlistAdd(wishlist.some((i) => i.id === product.id));
    setIsCompareAdd(compare_products.some((i) => i.id === product.id));
  }, [cart_products, compare_products, product.id, wishlist]);

  return (
    <div className="tplist__product d-flex align-items-center justify-content-between mb-20">
      <div className="tplist__product-img">
        <Link href={`/shop-details/${product.id}`}>
          <Image
            src={image.original}
            alt="product-img"
            width={222}
            height={221}
            style={imgStyle}
          />
        </Link>
        {image.thumbnail && (
          <Link href={`/shop-details/${product.id}`} className="tplist__product-img-two">
            <Image
              src={image.thumbnail}
              alt="product-img"
              width={222}
              height={221}
              style={imgStyle}
            />
          </Link>
        )}
        <div className="tpproduct__info bage">
          {discount > 0 && (
            <span className="tpproduct__info-discount bage__discount">
              -{discount.toFixed(0)}%
            </span>
          )}
          {isHot(updated_at) && (
            <span className="tpproduct__info-hot bage__hot">HOT</span>
          )}
        </div>
      </div>
      <div className="tplist__content">
        <span>{unit}</span>
        <h4 className="tplist__content-title">
          <a href="#">{title}</a>
        </h4>
        <div className="tplist__rating mb-5">
          <Rating allowFraction size={16} initialValue={averageRating(reviews)} readonly={true} />
        </div>
        {productInfoList && (
        <ul className="tplist__content-info">
          {productInfoList.map((info,i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
        )}
      </div>
      <div className="tplist__price justify-content-end">
        <h4 className="tplist__instock">
          Availability: <span>{quantity} in stock</span>{" "}
        </h4>
        <h3 className="tplist__count mb-15">${sale_price ? sale_price.toFixed(2) : price.toFixed(2)}</h3>
          {isItemAddToCart ? (
              <Link href="/cart" className="tp-btn-2 mb-10">
                View Cart
              </Link>
            ) : (
              <button className="tp-btn-2 mb-10"
                onClick={() => dispatch(add_cart_product(product))}
              >
              Add to Cart
            </button>
          )}
        <div className="tplist__shopping">
          <a className="pointer" onClick={() => dispatch(add_to_wishlist(product))}>
            <i className={"icon-heart icons" + (isWishlistAdd ? " active" : "")}></i> wishlist
          </a>
          <a className="pointer" onClick={() => dispatch(add_to_compare(product))}>
            <i className={"icon-layers" + (isCompareAdd ? " active" : "")}></i>Compare
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
