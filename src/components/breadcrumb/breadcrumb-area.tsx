import Link from "next/link";
import React from "react";

// prop type 
type IProps = {
  title: string;
  subtitle: string;
}

const BreadcrumbArea = ({ title, subtitle }: IProps) => {
  return (
    <div className="breadcrumb__area grey-bg pt-50 pb-55">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-breadcrumb__content text-center">
              <h4 className="tp-breadcrumb__title">{title}</h4>
              <div className="tp-breadcrumb__list">
                <span className="tp-breadcrumb__active">
                  <Link href="/">Home{" "}</Link>
                </span>
                <span className="dvdr">/</span>
                <span>{" "}{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbArea;
