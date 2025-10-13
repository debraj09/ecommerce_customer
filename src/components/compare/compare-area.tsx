'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import { IProductData } from '@/types/product-d-t';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getCompareProducts, remove_compare_product } from '@/redux/features/compare';
import { add_cart_product } from '@/redux/features/cart';
import { averageRating } from '@/utils/utils';

const CompareArea = () => {
  const {compare_products} = useAppSelector((state) => state.compare);

  const dispatch = useAppDispatch();
  // handle remove
  const handleRemove = (item: IProductData) => {
    dispatch(remove_compare_product(item));
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getCompareProducts())
    }
  }, [dispatch]);

  return (
    <>
     <section className="compare__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {compare_products.length === 0 ? (
              <div className='text-center'>
                <h3>No Compare product</h3>
                <Link href="/shop" className="tp-btn-2 mt-10">
                   Shop Now
                </Link>
              </div>
            ) : (
              <div className="tp-compare-table text-center">
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <th>Product</th>
                      {compare_products.map((item, index) => (
                        <td key={index}>
                          <div className="tp-compare-thumb">
                            <Image src={item.image.original} alt="" width={200} height={200} style={{height:'auto'}} />
                            <h4 className="tp-compare-product-title">
                              <a href="#" dangerouslySetInnerHTML={{ __html: item.title }} />
                            </h4>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th>Description</th>
                      {compare_products.map((item, index) => (
                        <td key={index}>
                          <div className="tp-compare-desc">
                            <p>{item.description}</p>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th>Price</th>
                      {compare_products.map((item, index) => (
                        <td key={index}>
                          <div className="tp-compare-price">
                            <span>${item.sale_price?.toFixed()}</span>
                            {item.sale_price && (
                              <span className="old-price">${item.price.toFixed(2)}</span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th>Add to cart</th>
                      {compare_products.map((item, index) => (
                        <td key={index}>
                          <div className="tp-compare-add-to-cart">
                            <a
                              onClick={() => dispatch(add_cart_product(item))}
                              className="tp-btn-2"
                            >
                              Add to Cart
                            </a>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th>Rating</th>
                      {compare_products.map((item, index) => (
                      <td key={index}>
                        <div className="tp-compare-rating">
                          {[1, 2, 3, 4, 5].map((starIndex) => (
                            <span key={starIndex}>
                              <i className="fas fa-star"></i>
                            </span>
                          ))}
                          <strong className="mx-2">{averageRating(item.reviews)}</strong>
                        </div>
                      </td>
                    ))}

                    </tr>
                    <tr>
                      <th>Remove</th>
                      {compare_products.map((item, index) => (
                        <td key={index}>
                          <div className="tp-compare-remove">
                            <button onClick={() => handleRemove(item)} className="cursor-pointer">
                              <i className="fal fa-trash-alt"></i>
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section> 
    </>
  );
};

export default CompareArea;