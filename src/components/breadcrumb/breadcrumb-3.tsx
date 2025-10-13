import Link from "next/link";
import React from "react";

// prop type
type IProps = {
  category: string;
  title: string;
  bgClr?: string;
};

const BreadcrumbThree = ({ category, title,bgClr }: IProps) => {
  return (
    <div className={`breadcrumb__area pt-5 pb-5 ${bgClr}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span className="tp-breadcrumb__active">
                  <Link href="/">Home{" "}</Link>
                </span>
                <span className="dvdr">/</span>
                <span className="tp-breadcrumb__active">
                  <Link href="/">{category}{" "}</Link>
                </span>
                <span className="dvdr">/</span>
                <span>
                {" "}{title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbThree;
