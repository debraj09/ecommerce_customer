'use client';
import React from "react";
import { useAppDispatch } from "@/redux/hook";
import { reset } from "@/redux/features/filter";

const ResetFilter = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="tpshop__widget pt-15">
      <h4 className="tpshop__widget-title mb-20">Reset Filter</h4>
      <div className="productsidebar__btn mt-15 mb-15">
        <a onClick={() => dispatch(reset())} className="pointer">Reset</a>
      </div>
    </div>
  );
};

export default ResetFilter;
