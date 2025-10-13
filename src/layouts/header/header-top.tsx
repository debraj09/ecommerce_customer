'use client';
import React from "react";
import NiceSelect from "@/components/ui/nice-select";
import Link from "next/link";

const HeaderTop = () => {
  const handleCurrency = (item: { value: string; label: string }) => {};
  return (
    <div className="header__top theme-bg-1 d-none d-md-block">
      {/* <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="header__top-left">
              <span>
                Due to the <strong>COVID-19</strong> epidemic, orders may be
                processed with a slight delay.
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="header__top-right d-flex align-items-center">
              <div className="header__top-link">
                <a href="#">Store Location</a>
                <a href="#">Order Tracking</a>
                <Link href="/faq">FAQs</Link>
              </div>
              <div className="header__lang">
                <span className="header__lang-select">
                  English <i className="far fa-angle-down"></i>
                </span>
                <ul className="header__lang-submenu">
                  <li>
                    <a href="#">Australia</a>
                  </li>
                  <li>
                    <a href="#">Spain</a>
                  </li>
                  <li>
                    <a href="#">Brazil</a>
                  </li>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">France</a>
                  </li>
                  <li>
                    <a href="#">United States</a>
                  </li>
                </ul>
              </div>
              <div className="header__top-price">
                <NiceSelect
                  options={[
                    { value: "usd", label: "USD" },
                    { value: "ars", label: "ARS" },
                    { value: "aud", label: "AUD" },
                    { value: "brl", label: "BRL" },
                    { value: "gbp", label: "GBP" },
                    { value: "dkk", label: "DKK" },
                    { value: "eur", label: "EUR" },
                  ]}
                  defaultCurrent={0}
                  onChange={(item) => handleCurrency(item)}
                  name="Currency"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderTop;
