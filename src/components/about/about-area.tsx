import React from 'react';
import Image from 'next/image';
import about_img from '@/assets/img/shape/about-img-1.png';

// about item 
export function AboutItem ({icon,title,subtitle}:{icon:string;title:string;subtitle:string}) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="tpabout__item text-center mb-40">
          <div className="tpabout__icon mb-15">
            <Image src={`/assets/img/icon/about-svg${icon}.svg`} alt="icon" width={64} height={64}/>
          </div>
          <div className="tpabout__content">
            <h4 className="tpabout__title">{title}</h4>
            <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
          </div>
      </div>
    </div> 
  )
}

// prop type 
type IProps = {
  style_2?: boolean;
}
const AboutArea = ({style_2 = false}:IProps) => {
  return (
    <section className={`about-area ${style_2 ? 'pb-35' : 'pt-70'}`}>
      <div className="container">
          <div className={`${style_2 ? '' : 'tpabout__border pb-35'}`}>
            {!style_2 && (
              <div className="row">
                  <div className="col-md-12">
                    <div className="tpabout__title-img text-center mb-45">
                        <Image className="mb-25" src={about_img} alt="about-img"/>
                        <p>We are Online Market of fresh fruits & vegetables. <br/> You can also find organic & healthy juice, processed food as <br/>well as gentle skin tcare at our store.</p>
                    </div>
                  </div>
              </div>
            )}
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

export default AboutArea;