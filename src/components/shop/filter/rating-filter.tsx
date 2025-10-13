'use client';
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { rating_filter } from "@/redux/features/filter";
import { Rating } from "react-simple-star-rating";

const RatingFilter = () => {
  const ratings = [5, 4, 3, 2, 1];
  const dispatch = useAppDispatch();
  const {ratingValue} = useAppSelector((state) => state.filter);
  return (
    <div className="tpshop__widget pb-25">
      <h4 className="tpshop__widget-title">FILTER BY RATING</h4>
      {ratings.map((r) => (
        <div className="form-check" key={r}>
          <input
            className="form-check-input"
            type="checkbox"
            id={`rating-check-${r}`}
            onChange={() => dispatch(rating_filter(r))}
            checked={ratingValue === r}
          />
          <label
            className="form-check-label"
            htmlFor={`rating-check-${r}`}
          >
            <Rating allowFraction size={16} initialValue={r} readonly={true} />
            {" "} ({r} Star)
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
