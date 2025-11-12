"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { useParams } from "next/navigation";
import ReviewForm from "../form/review-form";
import { Video } from "../svg";
import VideoPopup from "../common/modal/video-popup";
import ShopDetailsUpper from "./shop-details-upper";
import Link from "next/link";

// API Response Interfaces
interface IProductImage {
  id: number;
  original: string;
}

interface IProductReview {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  date: string;
  user_avatar?: string;
}

interface IProductCategory {
  id: number;
  name: string;
  parent_id?: number | null;
}

interface IProductVariation {
  variation_id: number;
  product_id: number;
  size?: string;
  color?: string;
  price: string;
  sale_price?: string;
  stock_quantity: number;
  sku?: string;
}

interface IProductData {
  product_id: number;
  name: string;
  description: string;
  long_description: string;
  price: string;
  sale_price?: string;
  image_url: string | null;
  gallery_images?: string[];
  stock_quantity: number;
  category_id: number;
  subcategory_id: number | null;
  brand?: string;
  tags?: string[];
  video_id?: string;
  additional_info?: Array<{ key: string; value: string }>;
  created_at: string;
  updated_at: string;
  reviews?: IProductReview[];
  category?: IProductCategory;
  variations?: IProductVariation[];
  base_price?: string;
  base_stock?: number;
}

interface IApiResponse {
  status: number;
  message: string;
  data: IProductData;
}

// prop type
type IProps = {
  navStyle?: boolean;
  topThumb?: boolean;
};

const ShopDetailsArea = ({ navStyle = false, topThumb = false }: IProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProductData | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const params = useParams();
  const productId = params.id;

  // FIXED: Image URL formatter with full domain
  const formatImageUrl = (url: string | null): string => {
    if (!url) return '/assets/img/product/product-1.jpg';
    
    // If it's already a full URL, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If it starts with /public/images, construct full URL
    if (url.startsWith('/public/images/')) {
      return `https://ecomm.braventra.in${url}`;
    }
    
    // If it starts with /images, construct full URL
    if (url.startsWith('/images/')) {
      return `https://ecomm.braventra.in/public${url}`;
    }
    
    // For any other relative paths, add domain
    if (url.startsWith('/')) {
      return `https://ecomm.braventra.in${url}`;
    }
    
    // Default case
    return `https://ecomm.braventra.in/public/images/${url}`;
  };

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://ecomm.braventra.in/api/products/${productId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch product details: ${response.status}`);
        }
        
        const result: IApiResponse = await response.json();
        
        if (result.status === 200) {
          console.log("Product data received:", result.data);
          setProduct(result.data);
          setRelatedProducts([]);
        } else {
          throw new Error(result.message || 'Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    } else {
      setError('No product ID provided');
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return (
      <section className="shopdetails-area grey-bg pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center py-5">
              <h4>Loading product details...</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="shopdetails-area grey-bg pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center py-5">
              <h4 className="text-danger">{error || 'Product not found'}</h4>
              <p className="text-muted">Product ID: {productId}</p>
              <Link href="/shop" className="btn btn-primary mt-3">
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Safe destructuring with default values
  const {
    brand,
    category_id,
    gallery_images = [],
    reviews = [],
    price,
    sale_price,
    base_price,
    description,
    long_description,
    additional_info = [],
    video_id,
    tags = [],
    stock_quantity,
    base_stock,
    variations = []
  } = product;

  // FIXED: Get correct price - use base_price if available, otherwise price
  const productPrice = base_price || price;
  const productStock = base_stock || stock_quantity;

  // Calculate average rating with safe access
  const averageRating = (reviewList: IProductReview[]): number => {
    if (!reviewList || reviewList.length === 0) return 0;
    const total = reviewList.reduce((sum, review) => sum + review.rating, 0);
    return total / reviewList.length;
  };

  // Check if product is hot (based on recent update)
  const isHot = (updatedAt: string): boolean => {
    try {
      const updateDate = new Date(updatedAt);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - updateDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    } catch {
      return false;
    }
  };

  // Prepare product data for ShopDetailsUpper with safe mapping
  const productForShopDetails = {
    id: product.product_id,
    title: product.name,
    price: parseFloat(productPrice),
    sale_price: sale_price ? parseFloat(sale_price) : undefined,
    image: {
      id: product.product_id,
      original: formatImageUrl(product.image_url)
    },
    gallery: gallery_images.map((img, index) => ({
      id: index,
      original: formatImageUrl(img)
    })),
    smDesc: description,
    availability: productStock > 0,
    category: {
      parent: product.category?.name || 'Uncategorized',
      child: ''
    },
    brand: brand,
    tags: tags || [],
    quantity: productStock,
    reviews: (reviews || []).map(review => ({
      id: review.id,
      user: review.user_avatar || '/assets/img/user/user-1.jpg',
      rating: review.rating,
      comment: review.comment,
      date: review.date
    })),
    description: long_description || description,
    additionalInfo: additional_info || [],
    videoId: video_id,
    variations: variations
  };

  return (
    <>
      <section className="shopdetails-area grey-bg pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12">
              <div className="tpdetails__area mr-60 pb-30">
                {/* shop details upper */}
              <ShopDetailsUpper 
                  product={productForShopDetails as any} // FIXED: Casting to 'any' to resolve Type Error
                  navStyle={navStyle} 
                  topThumb={topThumb}
                />
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
                          Additional Information
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
                    {/* Description Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="nav-description"
                      role="tabpanel"
                      aria-labelledby="nav-description-tab"
                      tabIndex={0}
                    >
                      <div className="tpdescription__video">
                        <h5 className="tpdescription__product-title">Product Details</h5>
                        <p>{long_description || description}</p>
                        {video_id && (
                          <div className="tpdescription__video-wrapper p-relative mt-30 mb-35 w-img">
                            <Image 
                              src="/assets/img/product/product-video1.jpg" 
                              width={1036} 
                              height={302} 
                              alt="Product Video" 
                              style={{ height: "auto" }}
                            />
                            <div className="tpvideo__video-btn">
                              <a 
                                className="tpvideo__video-icon pointer popup-video" 
                                onClick={() => setIsVideoOpen(true)}
                              >
                                <i>
                                  <Video />
                                </i>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Additional Information Tab */}
                    <div
                      className="tab-pane fade"
                      id="nav-information"
                      role="tabpanel"
                      aria-labelledby="nav-info-tab"
                      tabIndex={0}
                    >
                      <div className="tpdescription__content">
                        <p>
                          {long_description || description}
                        </p>
                      </div>
                      <div className="tpdescription__product-wrapper mt-30 mb-30 d-flex justify-content-between align-items-center">
                        <div className="tpdescription__product-info">
                          <h5 className="tpdescription__product-title">
                            Product Details
                          </h5>
                          {additional_info && additional_info.length > 0 ? (
                            <ul className="tpdescription__product-info">
                              {additional_info.map((info, index) => (
                                <li key={index}>
                                  <strong>{info.key}:</strong> {info.value}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="tpdescription__product-info">
                              <li><strong>Brand:</strong> {brand || 'Not specified'}</li>
                              <li><strong>Category:</strong> {product.category?.name || 'Uncategorized'}</li>
                              <li><strong>Stock:</strong> {productStock > 0 ? 'In Stock' : 'Out of Stock'}</li>
                              {tags && tags.length > 0 && (
                                <li><strong>Tags:</strong> {tags.join(', ')}</li>
                              )}
                              {variations && variations.length > 0 && (
                                <li><strong>Variations:</strong> {variations.length} options available</li>
                              )}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Reviews Tab */}
                    <div
                      className="tab-pane fade"
                      id="nav-review"
                      role="tabpanel"
                      aria-labelledby="nav-review-tab"
                      tabIndex={0}
                    >
                      <div className="tpreview__wrapper">
                        <h4 className="tpreview__wrapper-title">
                          {reviews.length} review{reviews.length !== 1 ? 's' : ''} for {product.name}
                        </h4>
                        {reviews && reviews.length > 0 ? (
                          reviews.map((review) => (
                            <div key={review.id} className="tpreview__comment">
                              <div className="tpreview__comment-img mr-20">
                                <Image
                                  src={review.user_avatar || '/assets/img/user/user-1.jpg'}
                                  alt="user"
                                  width={70}
                                  height={70}
                                />
                              </div>
                              <div className="tpreview__comment-text">
                                <div className="tpreview__comment-autor-info d-flex align-items-center justify-content-between">
                                  <div className="tpreview__comment-author">
                                    <span>{review.user_name}</span>
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
                                  {review.date}
                                </span>
                                <p>{review.comment}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>No reviews yet. Be the first to review this product!</p>
                        )}
                        
                        <div className="tpreview__form">
                          <h4 className="tpreview__form-title mb-25">
                            Add a review
                          </h4>
                          {/* review form */}
                          {/* <ReviewForm /> */}
                          {/* review form */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                            Free shipping apply to all orders over $90
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
                            Guaranteed quality products
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
                            Easy returns policy
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

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="tpsidebar__product">
                    <h4 className="tpsidebar__title mb-15">Related Products</h4>
                    {relatedProducts.slice(0, 2).map((relatedProduct) => (
                      <div key={relatedProduct.product_id} className="tpsidebar__product-item">
                        <div className="tpsidebar__product-thumb p-relative">
                          <Image
                            src={formatImageUrl(relatedProduct.image_url)}
                            alt="product-img"
                            width={210}
                            height={210}
                          />
                          <div className="tpsidebar__info bage">
                            {isHot(relatedProduct.updated_at) && (
                              <span className="tpproduct__info-hot bage__hot">HOT</span>
                            )}
                          </div>
                        </div>
                        <div className="tpsidebar__product-content">
                          <span className="tpproduct__product-category">
                            <Link href={`/shop-details/${relatedProduct.product_id}`}>
                              {relatedProduct.category?.name || 'Uncategorized'}
                            </Link>
                          </span>
                          <h4 className="tpsidebar__product-title">
                            <Link href={`/shop-details/${relatedProduct.product_id}`}>
                              {relatedProduct.name}
                            </Link>
                          </h4>
                          <div className="tpproduct__rating mb-5">
                            <Rating
                              allowFraction
                              size={16}
                              initialValue={averageRating(relatedProduct.reviews || [])}
                              readonly={true}
                            />
                          </div>
                          <div className="tpproduct__price">
                            <span>${parseFloat(relatedProduct.base_price || relatedProduct.price).toFixed(2)}</span>
                            {relatedProduct.sale_price && (
                              <del>${parseFloat(relatedProduct.sale_price).toFixed(2)}</del>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {video_id && (
        <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={video_id}
        />
      )}
    </>
  );
};

export default ShopDetailsArea;