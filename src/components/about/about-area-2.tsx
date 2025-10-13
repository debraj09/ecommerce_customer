import React from 'react';
import Image from 'next/image';
import title_thumb from '@/assets/img/shape/about-img-2.png';
import { AboutItem } from './about-area';


const AboutAreaTwo = () => {
  return (
    <section className="about-area pt-55">
      <div className="container">
         <div className="tpabout__border pb-35">
            <div className="row">
               <div className="col-md-12">
                  <div className="tpabout__title-img text-center mb-45">
                     <Image className="tpcbout__thumb-title mb-25" src={title_thumb} alt="title_thumb"/>
                     <p>We are Online Market of fresh fruits & vegetables. <br/> You can also find organic & healthy juice, processed food as <br/>well as gentle skin tcare at our store.</p>
                  </div>
               </div>
            </div>
            <div className="row">
            <AboutItem icon="1" title="Select Your Products" subtitle="Choose from select produce to start. <br/> Keep, add, or remove items."/>
            <AboutItem icon="2" title="Our Shop Orfarm" subtitle="We provide 100+ products, provide <br/> enough nutrition for your family."/>
            <AboutItem icon="3" title="Delivery To Your" subtitle="Delivery to your door. Up to 100km  <br/> and it is completely free."/>
            </div>
         </div>
      </div>
   </section>
  );
};

export default AboutAreaTwo;