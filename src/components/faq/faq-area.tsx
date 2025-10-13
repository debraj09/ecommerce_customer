import React from 'react';
import AccordionItem from './faq- item';

const FaqArea = () => {
  return (
    <section className="faq-area pb-80 pt-80">
    <div className="container">
       <div className="row">
          <div className="col-lg-6">
             <div className="tpfaq__content mr-50">
                <h4 className="tpfaq__title">How can we help you?</h4>
                <p>Returns are free for orders shipped within the U.S. We include a UPS return label in every package which is at no cost to use.</p>
                <span>Follow the steps below for a seamless returns process:</span>
                <ul>
                   <li>
                      – Please indicate a reason for return using one of the Return Codes listed on the order form included in your package.
                   </li>
                   <li>
                      – Attach your UPS return label to the outside of the package. There is no cost to use this label.
                   </li>
                   <li>
                      – Please make note of your tracking number so that you are able to track it on its way back to us 
                   </li>
                </ul>
                <p>
                   You will receive an email once your return has been processed. Please allow 06 – 12 business days from the time your package arrives back to us for a refund to be issued.
                </p>
             </div>
          </div>
          <div className="col-lg-6">
             <div className="tpfaq">
                <div className="tpfaq__item mb-45">
                   <h4 className="tpfaq__title mb-40">Shopping Information</h4>
                   <div className="accordion" id="accordion-one">
                   <AccordionItem id='one' title='How much is shipping and how long will it take?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-one' />
                   <AccordionItem id='two' title='Pellentesque habitant morbi tristique senectus et netus?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-one' />
                   <AccordionItem id='three' title='How long will it take to get my package?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-one' />
                    </div>
                </div>
                <div className="tpfaq__item mb-45">
                   <h4 className="tpfaq__title mb-20">Payment information</h4>
                   <div className="accordion" id="accordion-two">
                   <AccordionItem id='four' title='How do I know if my order was successful?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-two' />
                   <AccordionItem id='five' title='How much is shipping and how long will it take?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-two' />
                   <AccordionItem id='six' title=' Pellentesque habitant morbi tristique senectus et netus?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-two' />
                    </div>
                </div>
                <div className="tpfaq__item">
                   <h4 className="tpfaq__title mb-20">Order & Returns</h4>
                   <div className="accordion" id="accordion-three">
                   <AccordionItem id='seven' title='How do I know if my order was successful?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-three' />
                   <AccordionItem id='eight' title='How much is shipping and how long will it take?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-three' />
                   <AccordionItem id='nine' title=' Pellentesque habitant morbi tristique senectus et netus?' desc='The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' parent='accordion-three' />
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default FaqArea;