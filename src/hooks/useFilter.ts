'use client';
import { useState, useEffect } from 'react';
import product_data from '@/data/product-data';
import { useAppSelector } from '@/redux/hook';
import { averageRating } from '@/utils/utils';
import { IProductData } from '@/types/product-d-t';
import { useSearchParams } from 'next/navigation';

export function useProductFilter() {
  const [products, setProducts] = useState<IProductData[]>([...product_data]);
  const { category, subCategory, sizes, colors, brand, priceValue, ratingValue } = useAppSelector((state) => state.filter);
  // filter
  useEffect(() => {
    let filteredData = [...product_data].filter((p) =>
      (category && !subCategory) ? p.category.parent.toLowerCase() === category.toLowerCase() :
        (!category && subCategory) ? p.category.child.toLowerCase() === subCategory.toLowerCase() :
          (category && subCategory) ? p.category.parent.toLowerCase() === category.toLowerCase() && p.category.child.toLowerCase() === subCategory.toLowerCase() :
            true
    ).filter((p) => p.price >= priceValue[0] && p.price <= priceValue[1])
      .filter((p) => {
        if (colors.length > 0 && p.color) {
          return p.color.some((c) => colors.includes(c));
        }
        return true;
      }).filter((p) => {
        if (brand) {
          return p.brand.toLowerCase() === brand.toLowerCase();
        }
        return true;
      }).filter((p) => {
        if (ratingValue) {
          return averageRating(p.reviews) >= ratingValue;
        }
        return true;
      });

    setProducts(filteredData);
  }, [brand, category, colors, priceValue, sizes, subCategory, ratingValue]);

  const handleSorting = (item: { value: string; label: string }) => {
    if (item.value === "new") {
      setProducts([...product_data].slice(-10));
    } else if (item.value === "high") {
      setProducts([...product_data].sort((a, b) => b.price - a.price));
    } else if (item.value === "low") {
      setProducts([...product_data].sort((a, b) => a.price - b.price));
    } else {
      setProducts([...product_data]);
    }
  };

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");
  const searchText = searchParams.get("searchText");

  const categoryMatch = (item: IProductData) => {
    return (
      !searchCategory || item.category.parent.toLowerCase().includes(searchCategory.toLowerCase())
    );
  };

  const titleMatch = (item: IProductData) => {
    return (
      !searchText || item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    setProducts([...product_data].filter((item) => categoryMatch(item) && titleMatch(item)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    setProducts,
    handleSorting,
  }
}