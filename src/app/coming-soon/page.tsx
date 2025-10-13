import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Image from "next/image";
import coming_soon from '@/assets/img/banner/comming-soon-banner.png';
import message from '@/assets/img/shape/message-1.svg';
import shape_1 from '@/assets/img/shape/comming-shae-1.png';
import shape_2 from '@/assets/img/shape/comming-shae-2.png';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon - Orfarm",
};

export default function ComingSoonPage() {
  return (
    <Wrapper>
      <main>
        {/* coming soon area start */}
        <section className="commoing-soon-area grey-bg pt-75 pb-75">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6">
                     <div className="tpsoon">
                        <h4 className="tpsoon__sub-title mb-15">Coming soon</h4>
                        <h2 className="tpsoon__title mb-30">Our New Website <br/> Will Be Available Soon</h2>
                        <p>We are currently working on an awesome new site. Your personal details <br/>
                           are strictly for our use, and you can unsubscribe at any time.</p>
                        <div className="tpsoon__submit-form  mb-50">
                           <form action="#">
                              <div className="tpsoon__submit-wrapper">
                                 <div className="tpsoon__input mb-10 mr-10">
                                    <input type="email" placeholder="Your email address..."/>
                                    <span><Image src={message} alt="message"/></span>
                                 </div>
                                 <div className="tpsoon__submit">
                                    <button className="tp-btn-3">Subscribe</button>
                                 </div>
                              </div>
                           </form>
                        </div>   
                        <div className="rainbow__social mb-15">
                           <a href="#"><i className="fab fa-twitter"></i></a>
                           <a className="rainbow__facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                           <a className="rainbow__pin" href="#"><i className="fab fa-pinterest-p"></i></a>
                           <a className="rainbow__skype" href="#"><i className="fab fa-skype"></i></a>
                           <a className="rainbow__youtube" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                        <div className="tpsoon__copyright">
                           <span>Copyright <Link href="/">© ORFARM</Link> all rights reserved. Powered by <a href="#">Theme_pure</a>.</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                     <div className="tpsoon__thumb p-relative w-img">
                        <Image src={coming_soon} alt="coming_soon" style={{height: 'auto'}}/>
                        <div className="tpsoon__shape d-none d-md-block">
                           <div className="tpsoon__shape-one">
                              <Image src={shape_1} alt="shape" style={{height: 'auto'}}/>
                           </div>
                           <div className="tpsoon__shape-two">
                              <Image src={shape_2} alt="shape" style={{height: 'auto'}}/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        {/* coming soon area end */}
      </main>
    </Wrapper>
  );
}
