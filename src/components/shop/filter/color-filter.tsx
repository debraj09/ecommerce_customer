'use client';
import React from 'react';
import product_data from '@/data/product-data';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { add_colors } from '@/redux/features/filter';

const ColorFilter = () => {
  const allColors = product_data.flatMap((item) => item.color);
  const uniqueColors = [...new Set(allColors)].slice(0, 5);
  const { colors: stateColors } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  return (
    <div className="tpshop__widget mb-30 pb-25">
    <h4 className="tpshop__widget-title mb-20">Filter by Color</h4>
    <div className="tpshop__widget-color-box">
      {uniqueColors.map((color) => (
        <div className="form-check" key={color}>
          <input
            className="form-check-input black-input"
            style={{ backgroundColor: color }}
            type="checkbox"
            id={`color-${color}`}
            onChange={() => dispatch(add_colors(color!))}
            checked={stateColors.includes(color!)}
          />
          <label
            className="form-check-label"
            htmlFor={`color-${color}`}
          >
            {color}
          </label>
        </div>
      ))}
    </div>
</div>
  );
};

export default ColorFilter;