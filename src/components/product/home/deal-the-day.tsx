'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import shape_1 from "@/assets/img/shape/tree-leaf-1.svg";
import shape_2 from "@/assets/img/shape/tree-leaf-2.svg";
import shape_3 from "@/assets/img/shape/tree-leaf-3.svg";
import shape_4 from "@/assets/img/shape/fresh-shape-1.svg";
import CountdownTimer from "@/components/common/countdown-timer";

function Shape({ cls, img }: { cls: string; img: StaticImageData }) {
  return (
    <Image
      className={`tpcoundown__shape-${cls}`}
      src={img}
      alt="shape"
      style={{ height: "auto" }}
    />
  );
}

// prop type 
type IProps = {
  bgClr?:string;
}

export default function DealTheDay({bgClr}:IProps) {
  return (
    <section
      className={`product-coundown-area tpcoundown__bg ${bgClr?bgClr:'grey-bg'} pb-25`}
      style={{ backgroundImage: "url(/assets/img/banner/coundpwn-bg-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tpcoundown p-relative ml-175">
              <div className="section__content mb-35">
                <span className="section__sub-title mb-10">
                  ~ Deals Of The Day ~
                </span>
                <h2 className="section__title mb-25">
                  Premium Drinks <br /> Fresh Farm Product
                </h2>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue{" "}
                  <br />
                  doming quod mazim placerat facere possum assam going through.
                </p>
              </div>
              <div className="tpcoundown__count">
                <h4 className="tpcoundown__count-title">
                  hurry up! Offer End In:
                </h4>
                <CountdownTimer expiryTimestamp={new Date(2024, 6, 11)} />
                <div className="tpcoundown__btn mt-50">
                  <Link className="whight-btn" href="/shop">
                    Shop Now
                  </Link>
                  <Link
                    className="whight-btn border-btn ml-15"
                    href="/shop"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
              <div className="tpcoundown__shape d-none d-lg-block">
                <Shape cls="one" img={shape_1} />
                <Shape cls="two" img={shape_2} />
                <Shape cls="three" img={shape_3} />
                <Shape cls="four" img={shape_4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
