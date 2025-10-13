"use client";
import React from "react";
import { set_price_value } from "@/redux/features/filter";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import InputRange from "@/components/ui/input-range";
import { maxPrice } from "@/utils/utils";

const PriceFilter = () => {
  const { priceValue } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  // handleChanges
  const handleChanges = (val: number[]) => {
    dispatch(set_price_value(val));
  };
  return (
    <div className="tpshop__widget mb-30 pb-25">
      <h4 className="tpshop__widget-title mb-20">FILTER BY PRICE</h4>
      <div className="productsidebar">
        <div className="productsidebar__head"></div>
        <div className="productsidebar__range">
          <div id="slider-range">
          <InputRange
              MAX={maxPrice()}
              MIN={0}
              STEP={1}
              values={priceValue}
              handleChanges={handleChanges}
            />
          </div>
          <div className="price-filter mt-10">
            <span>${priceValue[0]} - ${priceValue[1]}</span>
          </div>
        </div>
      </div>
      <div className="productsidebar__btn mt-15 mb-15">
        <a href="#">FILTER</a>
      </div>
    </div>
  );
};

export default PriceFilter;
