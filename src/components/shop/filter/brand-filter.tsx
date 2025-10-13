'use client';
import React from "react";
import brands_data from "@/data/brand-data";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_brand } from "@/redux/features/filter";

const BrandFilter = () => {
  const brands = [...brands_data];
  const { brand: stateBrand } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  return (
    <div className="tpshop__widget mb-30 pb-25">
      <h4 className="tpshop__widget-title">FILTER BY BRAND</h4>
      {brands.map((brand) => (
        <div key={brand.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`brand-check-${brand.id}`}
            onChange={() => dispatch(add_brand(brand.name))}
            checked={stateBrand.includes(brand.name)}
          />
          <label
            className="form-check-label"
            htmlFor={`brand-check-${brand.id}`}
          >
            {brand.name} ({brand.products.length})
          </label>
        </div>
      ))}
    </div>
  );
};

export default BrandFilter;
