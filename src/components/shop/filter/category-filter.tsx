'use client';
import React from "react";
import category_data from "@/data/category-data";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_category, add_sub_category } from "@/redux/features/filter";

const CategoryFilter = () => {
  const categories = [...category_data];

  const {category:parentCategory,subCategory} = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch()

  const handleParentCategory = (value:string) => {
    dispatch(add_category(value))
  };

  const handleSubCategory = (list:string) => {
    dispatch(add_sub_category(list))
  };

  return (
    <div className="tpshop__widget mb-30 pb-25">
      <h4 className="tpshop__widget-title">Product Categories</h4>
      {categories.map((category,i) => (
        <div key={category.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`flexCheckDefault-${i+1}`}
            onChange={() => handleParentCategory(category.parent)}
            checked={category.parent === parentCategory ? true : false}
          />
          <label className="form-check-label" htmlFor={`flexCheckDefault-${i+1}`}>
            {category.parent} ({category.product_id.length})
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
