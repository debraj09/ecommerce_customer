import product_data from "@/data/product-data";
import { IProductData, IReview } from "@/types/product-d-t";

// calculate discount
export function discountPercentage(originalPrice: number, salePrice: number) {
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return discount;
}


export function isHot(updateDate: Date | string) {
  const updatedAt = new Date(updateDate);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = currentDate.getTime() - updatedAt.getTime();

  // Calculate the difference in days
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  // Check if the product is updated within the last month (30 days)
  const isHot = daysDifference < 30;

  return isHot;
}

// Get max price
export function maxPrice(): number {
  const max_price = [...product_data].reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return max_price
}


export function averageRating(reviews: IReview[]) {
  if (!reviews || reviews.length === 0) {
    return 0; // Return 0 if there are no reviews
  }

  // Calculate the sum of all ratings
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);

  // Calculate the average rating
  const avgRating = totalRating / reviews.length;

  return Number(avgRating.toFixed(0));
}
