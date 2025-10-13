"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProductData } from "@/types/product-d-t";
import { useAppDispatch } from "@/redux/hook";
import { add_cart_product } from "@/redux/features/cart";
import { remove_wishlist_product } from "@/redux/features/wishlist";

// prop type
type IProps = {
  product: IProductData;
};

const WishlistItem = ({ product }: IProps) => {
  const dispatch = useAppDispatch();
  // handle remove
  const handleRemove = (item: IProductData) => {
    dispatch(remove_wishlist_product(item));
  };
  return (
    <tr>
      <td className="product-thumbnail">
        <Link href={`/shop-details/${product.id}`}>
          <Image
            src={product.image.original}
            width={125}
            height={125}
            alt="wishlist-img"
          />
        </Link>
      </td>
      <td className="product-name">
        <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
      </td>
      <td className="product-price">
        {product.sale_price ? (
          <span className="amount">${product.sale_price.toFixed(2)}</span>
        ) : (
          <span className="amount">${product.price.toFixed(2)}</span>
        )}
      </td>
      <td className="product-add-to-cart">
        <button
          onClick={() => dispatch(add_cart_product(product))}
          className="tp-btn tp-color-btn  tp-wish-cart banner-animation"
        >
          Add To Cart
        </button>
      </td>
      <td className="product-remove">
        <a onClick={() => handleRemove(product)} className="pointer">
          <i className="fa fa-times"></i>
        </a>
      </td>
    </tr>
  );
};

export default WishlistItem;
