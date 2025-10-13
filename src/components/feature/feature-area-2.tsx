import React from 'react';
import { FeatureItem } from './feature-area';

const FeatureAreaTwo = () => {
  return (
   <section className="feature-area whight-feature grey-bg feature-top">
      <div className="container">
          <div className="feature-bg-round white-bg pt-50 pb-15">
            <div className="tpfeature-border">
                <div className="row row-cols-lg-5 row-cols-md-3 row-cols-1">
                <FeatureItem img="6" title="Fast Delivery" subtitle="Across West & East India" spacing='45' />
                <FeatureItem img="7" title="Safe Payment" subtitle="100% Secure Payment" spacing='45' />
                <FeatureItem img="8" title="Online Discount" subtitle="Add Multi-buy Discounts" spacing='45' />
                <FeatureItem img="9" title="Help Center" subtitle="Dedicated 24/7 Support" spacing='45' />
                <FeatureItem img="10" title="Curated items" subtitle="From Handpicked Sellers" spacing='45' />
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;