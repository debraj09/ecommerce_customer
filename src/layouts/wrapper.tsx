"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAppDispatch } from "@/redux/hook";
import { getCompareProducts } from "@/redux/features/compare";
import { getWishlistProducts } from "@/redux/features/wishlist";
import { getCartProducts, initialOrderQuantity } from "@/redux/features/cart";
import ProductModal from "@/components/common/modal/product-modal";
import BackToTop from "@/components/common/back-to-top";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialOrderQuantity());
    dispatch(getCartProducts());
    dispatch(getWishlistProducts());
    dispatch(getCompareProducts());
  }, [router, dispatch]);

  
  return (
    <>
      {children}
      <ProductModal/>
      <BackToTop/>
      <ToastContainer />
    </>
  );
};

export default Wrapper;
