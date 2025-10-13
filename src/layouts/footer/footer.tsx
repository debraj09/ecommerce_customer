import React from 'react';
import Image from 'next/image';
import payment from '@/assets/img/shape/footer-payment.png';
import social_links from '@/data/social-data';

// prop type 
type IProps = {
   style_2?: boolean
}

const Footer = ({style_2=false}:IProps) => {
  return (
    <footer>
       <div className={`tpfooter__area theme-bg-2 ${style_2 ? "pt-55 footer-border" : ""}`}>
       <div className="tpfooter__top pb-15">
          <div className="container">
             <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                   <div className="tpfooter__widget footer-col-1 mb-50">
                      <h4 className="tpfooter__widget-title">Let Us Help You</h4>
                      <p>If you have any question, please <br/> contact us at: 
                         <a href="mailto:support@example.com">support@example.com</a>
                      </p>
                      <div className="tpfooter__widget-social mt-45">
                         <span className="tpfooter__widget-social-title mb-5">Social Media:</span>
                         {social_links.map((s, i) => (
                              <a href={s.link} target="_blank" key={i}>
                                 <i className={s.icon}></i>
                              </a>
                           ))}
                      </div>
                   </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                   <div className="tpfooter__widget footer-col-2 mb-50">
                      <h4 className="tpfooter__widget-title">Looking for Orfarm?</h4>
                      <p>68 St. Vicent Place, Glasgow, Greater <br/> Newyork NH2012, UK.</p>
                      <div className="tpfooter__widget-time-info mt-35">
                         <span>Monday – Friday: <b>8:10 AM – 6:10 PM</b></span>
                         <span>Saturday: <b>10:10 AM – 06:10 PM</b></span>
                         <span>Sunday: <b>Close</b></span>
                      </div>
                   </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5">
                   <div className="tpfooter__widget footer-col-3 mb-50">
                      <h4 className="tpfooter__widget-title">HOT CATEGORIES</h4>
                      <div className="tpfooter__widget-links">
                         <ul>
                            <li><a href="#">Fruits & Vegetables</a></li>
                            <li><a href="#">Dairy Products</a></li>
                            <li><a href="#">Package Foods</a></li>
                            <li><a href="#">Beverage</a></li>
                            <li><a href="#">Health & Wellness</a></li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7">
                   <div className="tpfooter__widget footer-col-4 mb-50">
                      <h4 className="tpfooter__widget-title">Our newsletter</h4>
                      <div className="tpfooter__widget-newsletter">
                         <p>Subscribe to the Orfarm mailing list to receive updates <br/> on new arrivals & other information.</p>
                         <form>
                            <span>
                              <i>
                                <Image src="/assets/img/shape/message-1.svg" alt="icon" width={18} height={15}/>
                              </i>
                            </span>
                            <input type="email" placeholder="Your email address..."/>
                            <button className="tpfooter__widget-newsletter-submit tp-news-btn">Subscribe</button>
                         </form>
                         <div className="tpfooter__widget-newsletter-check mt-10">
                            <div className="form-check">
                               <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                               <label className="form-check-label" htmlFor="flexCheckDefault">
                                  I accept terms & conditions & privacy policy.
                               </label>
                             </div>                                  
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div className="tpfooter___bottom pt-40 pb-40">
          <div className="container">
             <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-12">
                   <div className="tpfooter__copyright">
                      <span className="tpfooter__copyright-text">Copyright © <a href="#">ORFARM</a> all rights reserved. Powered by <a href="#">ThemePure</a>.</span>
                   </div>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-12">
                   <div className="tpfooter__copyright-thumb text-end">
                      <Image src={payment} alt="payment" style={{height:"auto"}}/>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </footer>
  );
};

export default Footer;