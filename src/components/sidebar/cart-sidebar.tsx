"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useCartInfo from "@/hooks/use-cart-info";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import empty_cart_img from "@/assets/img/cart/empty-cart.png";
import { remove_product } from "@/redux/features/cart";

// props 
type IProps = {
  isCartSidebarOpen: boolean;
  setIsCartSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartSidebar = ({isCartSidebarOpen,setIsCartSidebarOpen}:IProps) => {
  const cartItems = useAppSelector((state) => state.cart.cart_products);
  const dispatch = useAppDispatch(); 
  const { total } = useCartInfo();

  return (
    <>
      <div 
       className={`tpcartinfo tp-cart-info-area p-relative ${isCartSidebarOpen ? "tp-sidebar-opened" : ""}`}>
        <button className="tpcart__close" onClick={() => setIsCartSidebarOpen(false)}>
          <i className="icon-x"></i>
        </button>

          <div className="tpcart">
            <h4 className="tpcart__title">Your Cart</h4>
            {/* if no item in cart */}
            {cartItems.length === 0 && (
              <div className="cartmini__empty text-center pt-100">
                <Image src={empty_cart_img} alt="empty-cart-img" />
                <p>Your Cart is empty</p>
                <Link href="/shop" className="tp-btn-2 mt-10">
                  Go to Shop
                </Link>
              </div>
            )}
            {cartItems.length > 0 && (
            <div className="tpcart__product">
              <div className="tpcart__product-list">
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <div className="tpcart__item">
                        <div className="tpcart__img">
                          <Image
                            src={item.image.original}
                            alt="cart-img"
                            width={70}
                            height={70}
                          />
                          <div className="tpcart__del">
                            <a className="pointer" onClick={() => dispatch(remove_product(item))}>
                              <i className="icon-x-circle"></i>
                            </a>
                          </div>
                        </div>
                        <div className="tpcart__content">
                          <span className="tpcart__content-title">
                            <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                          </span>
                          <div className="tpcart__cart-price">
                            <span className="quantity">
                              {item.orderQuantity} x {" "}
                            </span>
                            <span className="new-price">
                              ${item.orderQuantity ? item.price * item.orderQuantity : item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tpcart__checkout">
                <div className="tpcart__total-price d-flex justify-content-between align-items-center">
                  <span> Subtotal:</span>
                  <span className="heilight-price"> ${total.toFixed(2)}</span>
                </div>
                <div className="tpcart__checkout-btn">
                  <Link className="tpcart-btn mb-10" href="/cart">
                    View Cart
                  </Link>
                  <Link className="tpcheck-btn" href="/checkout">
                    Checkout
                  </Link>
                </div>
              </div>
              <div className="tpcart__free-shipping text-center">
                <span>
                  Free shipping for orders <b>under 10km</b>
                </span>
              </div>
            </div>
            )}
          </div>
      </div>
      <div onClick={() => setIsCartSidebarOpen(false)} className={`cartbody-overlay ${isCartSidebarOpen ? "opened" : ""}`}></div>
    </>
  );
};

export default CartSidebar;
