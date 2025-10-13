import Link from 'next/link';
import React from 'react';

// prop type
type IProps = {
  bg: string
  subtitle: string
  title: string
  text: string
  isWhite?: boolean
}
// banner item
function BannerItem({bg,subtitle,title,text,isWhite}:IProps) {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="tpbanner__item mb-30">
          <Link href="/shop">
              <div className="tpbanner__content" style={{backgroundImage: `url(${bg})`}}>
                <span className={`tpbanner__sub-title ${isWhite ? 'tpbanner__white' : ''} mb-10`}>
                  {subtitle}
                 </span>
                <h4 className="tpbanner__title mb-30" dangerouslySetInnerHTML={{ __html: title }}></h4>
                <p>{text}</p>
              </div>
          </Link>
        </div>
    </div>
  )
}

const ProductBannerArea = () => {
  return (
    <section className="banner-area pb-60 grey-bg">
      <div className="container">
          <div className="row">
            <BannerItem bg='/assets/img/banner/banner-1.jpg' subtitle='Top offers' title='Eat Green <br/> Best For Family' text='Free Shipping 05km' />
            <BannerItem bg='/assets/img/banner/banner-2.jpg' subtitle='Weekend Deals' title='Fresh Food <br/> Restore Health' text='Top Quality Products' isWhite={true} />
            <BannerItem bg='/assets/img/banner/banner-3.jpg' subtitle='Top seller' title='Healthy <br/> Fresh Free Bread' text='Limited Time: Online Only!' />
          </div>
      </div>
    </section>
  );
};

export default ProductBannerArea;