"use client";
import React,{useState} from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { IProductData } from "@/types/product-d-t";
import product_data from "@/data/product-data";
import { averageRating, isHot } from "@/utils/utils";
import ReviewForm from "../form/review-form";
import { Video } from "../svg";
import VideoPopup from "../common/modal/video-popup";
import ShopDetailsUpper from "./shop-details-upper";
import Link from "next/link";

// prop type
type IProps = {
  product: IProductData;
  navStyle?: boolean;
  topThumb?: boolean;
};
const ShopDetailsArea = ({ product,navStyle=false,topThumb=false }: IProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const {brand,category,gallery,reviews,price,color,quantity,tags,sale_price,description,additionalInfo,productInfoList,videoId} = product;
  const recent_products = [...product_data].slice(0, 2);
  return (
    <>
    <section className="shopdetails-area grey-bg pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div className="tpdetails__area mr-60 pb-30">
              {/* shop details upper */}
              <ShopDetailsUpper product={product} navStyle={navStyle} topThumb={topThumb}/>
              {/* shop details upper */}
              <div className="tpdescription__box">
                <div className="tpdescription__box-center d-flex align-items-center justify-content-center">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-description"
                        type="button"
                        role="tab"
                        aria-controls="nav-description"
                        aria-selected="true"
                        tabIndex={-1}
                      >
                        Product Description
                      </button>
                      <button
                        className="nav-link"
                        id="nav-info-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-information"
                        type="button"
                        role="tab"
                        aria-controls="nav-information"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        ADDITIONAL INFORMATION
                      </button>
                      <button
                        className="nav-link"
                        id="nav-review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-review"
                        type="button"
                        role="tab"
                        aria-controls="nav-review"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        Reviews ({reviews.length})
                      </button>
                    </div>
                  </nav>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-description"
                    role="tabpanel"
                    aria-labelledby="nav-description-tab"
                    tabIndex={0}
                  >
                    <div className="tpdescription__video">
                      <h5 className="tpdescription__product-title">PRODUCT DETAILS</h5>
                      <p>{description}</p>
                      {videoId && 
                        <div className="tpdescription__video-wrapper p-relative mt-30 mb-35 w-img">
                          <Image src="/assets/img/product/product-video1.jpg" width={1036} height={302} alt="" style={{height: "auto"}}/>
                          <div className="tpvideo__video-btn">
                            <a className="tpvideo__video-icon pointer popup-video" onClick={()=> setIsVideoOpen(true)}>
                                <i>
                                  <Video/>
                                </i>
                            </a>
                          </div>
                      </div>
                      }
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-information"
                    role="tabpanel"
                    aria-labelledby="nav-info-tab"
                    tabIndex={0}
                  >
                    <div className="tpdescription__content">
                      <p>
                        Designed by Puik in 1949 as one of the first models
                        created especially for Carl Hansen & Son, and produced
                        since 1950. The last of a series of chairs wegner
                        designed based on inspiration from antique chinese
                        armchairs. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia eserunt mollit anim
                        id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, aque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.{" "}
                      </p>
                    </div>
                    <div className="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                      <div className="tpdescription__product-info">
                        <h5 className="tpdescription__product-title">
                          PRODUCT DETAILS
                        </h5>
                        {additionalInfo && 
                          <ul className="tpdescription__product-info">
                            {additionalInfo.map((info, index) => (
                              <li key={index}>{info.key}: {info.value}</li>
                            ))}
                          </ul>
                         }
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-review"
                    role="tabpanel"
                    aria-labelledby="nav-review-tab"
                    tabIndex={0}
                  >
                    <div className="tpreview__wrapper">
                      <h4 className="tpreview__wrapper-title">
                        {reviews.length} review for Cheap and delicious fresh chicken
                      </h4>
                      {reviews.map((review, index) => (
                        <div key={index} className="tpreview__comment">
                          <div className="tpreview__comment-img mr-20">
                            <Image
                              src={review.user}
                              alt="user"
                              width={70}
                              height={70}
                            />
                          </div>
                          <div className="tpreview__comment-text">
                            <div className="tpreview__comment-autor-info d-flex align-items-center justify-content-between">
                              <div className="tpreview__comment-author">
                                <span>admin</span>
                              </div>
                              <div className="tpreview__comment-star">
                                <Rating
                                  allowFraction
                                  size={16}
                                  initialValue={review.rating}
                                  readonly={true}
                                />
                              </div>
                            </div>
                            <span className="date mb-20">
                              --{review.date}:{" "}
                            </span>
                            <p>{review.comment}</p>
                          </div>
                        </div>
                      ))}
                      <div className="tpreview__form">
                        <h4 className="tpreview__form-title mb-25">
                          Add a review{" "}
                        </h4>
                        {/* review form */}
                        <ReviewForm />
                        {/* review form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="tpsidebar pb-30">
              <div className="tpsidebar__warning mb-30">
                <ul>
                  <li>
                    <div className="tpsidebar__warning-item">
                      <div className="tpsidebar__warning-icon">
                        <i className="icon-package"></i>
                      </div>
                      <div className="tpsidebar__warning-text">
                        <p>
                          Free shipping apply to all <br /> orders over $90
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpsidebar__warning-item">
                      <div className="tpsidebar__warning-icon">
                        <i className="icon-shield"></i>
                      </div>
                      <div className="tpsidebar__warning-text">
                        <p>
                          Guaranteed 100% Organic <br /> from nature farms
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="tpsidebar__warning-item">
                      <div className="tpsidebar__warning-icon">
                        <i className="icon-package"></i>
                      </div>
                      <div className="tpsidebar__warning-text">
                        <p>
                          60 days returns if you change <br /> your mind
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tpsidebar__banner mb-30">
                <Image
                  src="/assets/img/shape/sidebar-product-1.png"
                  alt="product-img"
                  width={270}
                  height={460}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="tpsidebar__product">
                <h4 className="tpsidebar__title mb-15">Recent Products</h4>
                {recent_products.map((product) => (
                  <div key={product.id} className="tpsidebar__product-item">
                    <div className="tpsidebar__product-thumb p-relative">
                      <Image
                        src={product.image.original}
                        alt="product-img"
                        width={210}
                        height={210}
                      />
                      <div className="tpsidebar__info bage">
                       {isHot(product.updated_at) && (
                          <span className="tpproduct__info-hot bage__hot">HOT</span>
                        )}
                      </div>
                    </div>
                    <div className="tpsidebar__product-content">
                      <span className="tpproduct__product-category">
                        <Link href={`/shop-details/${product.id}`}>
                          {product.category.parent}
                        </Link>
                      </span>
                      <h4 className="tpsidebar__product-title">
                        <Link href={`/shop-details/${product.id}`}>{product.title}</Link>
                      </h4>
                      <div className="tpproduct__rating mb-5">
                        <Rating
                          allowFraction
                          size={16}
                          initialValue={averageRating(reviews)}
                          readonly={true}
                        />
                      </div>

                      <div className={`tpproduct__price`}>
                        <span>${price.toFixed(2)} </span>
                        {sale_price && <del>${sale_price.toFixed(2)}</del>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

       {/* video modal start */}
       {videoId && <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />}
      {/* video modal end */}
    </>
  );
};

export default ShopDetailsArea;
