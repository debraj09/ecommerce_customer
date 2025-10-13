import Link from 'next/link';
import React from 'react';

// banner item 
function BannerItem ({bg,subtitle,title,text}:{bg:string;subtitle:string;title:string;text:string}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="tpbanner__item mb-30">
          <Link href="/shop">
            <div className="tpbanner__text tpbanner__bg" style={{backgroundImage: `url(${bg})`}}>
                <span className="tpbanner__sub-title mb-20">{subtitle}</span>
                <h4 className="tpbanner__title mb-20" dangerouslySetInnerHTML={{ __html: title }}></h4>
                <p>{text}</p>
            </div>
          </Link>
      </div>
    </div>
  )
}

const ProductBannerAreaTwo = () => {
  return (
   <section className="banner-area grey-bg">
      <div className="container">
          <div className="sections__wrapper white-bg pt-20 pl-50 pr-50 pb-30">
            <div className="row">
              <BannerItem bg="/assets/img/banner/banner-4.jpg" subtitle="Top offers" title="Seafood <br/> Fresh & Tasty" text="Natural, Rich in Nutrition" />
              <BannerItem bg="/assets/img/banner/banner-5.jpg" subtitle="Weekend Deals" title="vegetable <br/> Best For Family" text="Top Quality Products" />
              <BannerItem bg="/assets/img/banner/banner-6.jpg" subtitle="Top seller" title="fresh Meat <br/> Fresh & Tasty" text="Limited Time: Online Only!" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProductBannerAreaTwo;