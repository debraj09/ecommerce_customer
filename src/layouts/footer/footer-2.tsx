import React from 'react';
import Image from 'next/image';
import payment from '@/assets/img/shape/footer-payment.png';
import download_app from '@/assets/img/shape/download-app.png';
import Link from 'next/link';

const FooterTwo = () => {
  return (
    <footer>
      <div className="tpfooter__area tpfooter__border theme-bg-2">
        <div className="tpfooter__top pt-140 pb-15">
            <div className="container">
              <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tpfooter__widget footer-2-col-1 mb-50">
                        <h4 className="tpfooter__widget-title">Looking For Store?</h4>
                        <p>
                          78 St. Vicent Place, Glasgow, Greater Newyork
                          NH4014, UK.
                        </p>
                        <div className="tpfooter__widget-social mt-45">
                          <span className="tpfooter__widget-social-title mb-5">Download App:</span>
                          <a href="#"><Image src={download_app} alt="download_app"/></a>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tpfooter__widget footer-2-col-2 mb-50">
                        <h4 className="tpfooter__widget-title">Need Help?</h4>
                        <p>Got Question?</p>
                        <a className="tpfooter__phone-num" href="tel:+88-1990-6886">+88-1990-6886</a>
                        <div className="tpfooter__widget-time-info mt-35">
                          <span>Monday – Friday: <b>8:10 AM – 6:10 PM</b></span>
                          <span>Saturday: <b>10:10 AM – 06:10 PM</b></span>
                          <span>Sunday: <b>Close</b></span>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4">
                    <div className="tpfooter__widget footer-2-col-3 mb-50">
                        <h4 className="tpfooter__widget-title">Infomation</h4>
                        <div className="tpfooter__widget-links">
                          <ul>
                              <li><a href="#">Blog Us</a></li>
                              <li><Link href="/about">About us</Link></li>
                              <li><a href="#">Secure Shopping</a></li>
                              <li><a href="#">Delivery Information</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">FeedBack</a></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4">
                    <div className="tpfooter__widget footer-2-col-3 mb-50">
                        <h4 className="tpfooter__widget-title">Quick Links</h4>
                        <div className="tpfooter__widget-links">
                          <ul>
                              <li><a href="#">Store Location</a></li>
                              <li><a href="#">My Account</a></li>
                              <li><a href="#">Orders Tracking</a></li>
                              <li><Link href="/faq">FAQs</Link></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4">
                    <div className="tpfooter__widget footer-2-col-3 mb-50">
                        <h4 className="tpfooter__widget-title">My Account</h4>
                        <div className="tpfooter__widget-links">
                          <ul>
                              <li><a href="#">Product Support</a></li>
                              <li><a href="#">Checkout</a></li>
                              <li><a href="#">Shopping Cart</a></li>
                              <li><a href="#">Wishlist</a></li>
                              <li><a href="#">Custom Link</a></li>
                              <li><a href="#">Redeem Voucher</a></li>
                          </ul>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="tpfooter___bottom pt-40 pb-40">
            <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="tpfooter__copyright text-center">
                        <div className="tpfooter__payment mb-15">
                          <a href="#">
                            <Image src={payment} alt="payment" style={{height:"auto"}}/>
                           </a>
                        </div>
                        <span className="tpfooter__copyright-text">Copyright © <a href="#">ORFARM</a> all rights reserved. Powered by <a href="#">ThemePure</a>.</span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;