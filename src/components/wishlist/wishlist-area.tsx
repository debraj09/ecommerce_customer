"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import WishlistItem from "./wishlist-item";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getWishlistProducts } from "@/redux/features/wishlist";

const WishlistArea = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getWishlistProducts());
    }
  }, [dispatch]);
  return (
    <div className="cart-area pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {wishlist.length === 0 && (
              <div className="text-center pt-100">
                <h3>Your Wishlist is empty</h3>
                <Link href="/shop" className="tp-btn-2 mt-10">
                  Return to shop
                </Link>
              </div>
            )}
            {wishlist.length > 0 && (
              <div>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Courses</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-add-to-cart">Add To Cart</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map((item) => (
                        <WishlistItem key={item.id} product={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistArea;
