'use client';
import React,{ useEffect } from 'react';
import Link from 'next/link';
import CartItem from './cart-item';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import useCartInfo from '@/hooks/use-cart-info';
import { clearCart, getCartProducts } from '@/redux/features/cart';

const CartArea = () => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const { total } = useCartInfo();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getCartProducts())
    }
  }, [dispatch]);

  return (
  <section className="cart-area pb-80">
    <div className="container">
      <div className="row">
          <div className="col-12">
          {cart_products.length === 0 &&
                <div className='text-center pt-100'>
                  <h3>Your cart is empty</h3>
                  <Link href="/shop" className="tp-btn-2 mt-10">Return to shop</Link>
                </div>
              }
              {cart_products.length > 0 && 
                <div>
                  <div className="table-content table-responsive">
                      <table className="table">
                            <thead>
                              <tr>
                                  <th className="product-thumbnail">Images</th>
                                  <th className="cart-product-name">Courses</th>
                                  <th className="product-price">Unit Price</th>
                                  <th className="product-quantity">Quantity</th>
                                  <th className="product-subtotal">Total</th>
                                  <th className="product-remove">Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cart_products.map((item) => (
                                <CartItem key={item.id} product={item} />
                              ))}
                            </tbody>
                      </table>
                  </div>
                  <div className="row">
                      <div className="col-12">
                            <div className="coupon-all">
                              <div className="coupon">
                                  <input id="coupon_code" className="input-text" name="coupon_code" value=""  placeholder="Coupon code" type="text"/>
                                  <button className="tp-btn tp-color-btn banner-animation" name="apply_coupon" type="submit">Apply Coupon</button>
                              </div>
                              <div className="coupon2">
                                  <button onClick={() => dispatch(clearCart())} className="tp-btn tp-color-btn banner-animation" name="update_cart" type="button">Clear cart</button>
                              </div>
                            </div>
                      </div>
                  </div>
                  <div className="row justify-content-end">
                      <div className="col-md-5 ">
                            <div className="cart-page-total">
                              <h2>Cart totals</h2>
                              <ul className="mb-20">
                                  <li>Subtotal <span>${total.toFixed(2)}</span></li>
                                  <li>Total <span>${total.toFixed(2)}</span></li>
                              </ul>
                              <Link href="/checkout" className="tp-btn tp-color-btn banner-animation">Proceed to Checkout</Link>
                            </div>
                      </div>
                  </div>
                </div>
              }
          </div>
      </div>
    </div>
    </section>
  );
};

export default CartArea;