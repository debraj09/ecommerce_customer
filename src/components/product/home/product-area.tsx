'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types'; 
import ProductSingle from '../product-single/product-single';

// ====================================================================
// TEMPORARY LOCAL TYPE DEFINITION (to prevent the previous smDesc error)
interface ILocalProductImage {
    id: number;
    original: string;
}
interface ILocalProductCategory {
    parent: string;
    child: string;
}
interface ILocalProductData {
    id: number;
    title: string;
    price: number;
    image: ILocalProductImage;
    smDesc: string; 
    availability: boolean;
    category: ILocalProductCategory;
}
// ====================================================================

// Define types based on your API response
interface IProduct {
    product_id: number;
    name: string;
    description: string;
    long_description: string;
    price: string;
    image_url: string | null;
    stock_quantity: number;
    category_id: number;
    subcategory_id: number | null;
    created_at: string;
    updated_at: string;
}

interface ICategory {
    id: number;
    name: string;
}

interface IApiResponse {
    status: number;
    message: string;
    data: {
        products: IProduct[];
        categories: ICategory[];
    };
}

interface ICategoryResponse {
    status: number;
    message: string;
    data: {
        categories: ICategory[];
    };
}

// 💡 FIX 2: Explicitly define the type as SwiperOptions
const slider_setting: SwiperOptions = { 
    slidesPerView: 6,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        '1200': {
            slidesPerView: 6,
        },
        '992': {
            slidesPerView: 4,
        },
        '768': {
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: '.tpproduct-btn__nxt',
        prevEl: '.tpproduct-btn__prv',
    }
};

// FIXED image URL formatter - Add full domain for API images
const formatImageUrl = (url: string | null): string => {
    console.log("Formatting image URL:", url);
    
    if (!url) {
        console.log("No URL provided, using default image");
        return '/assets/img/product/product-1.jpg';
    }
    
    // If it's already a full URL (http/https), return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    
    // If it starts with /public/images, construct full URL to your API domain
    if (url.startsWith('/public/images/')) {
        const filename = url.replace('/public/images/', '');
        const fullUrl = `https://ecomm.braventra.in/public/images/${filename}`;
        console.log("Constructed full URL:", fullUrl);
        return fullUrl;
    }
    
    // If it starts with /images/, construct full URL to your API domain
    if (url.startsWith('/images/')) {
        const filename = url.replace('/images/', '');
        const fullUrl = `https://ecomm.braventra.in/public/images/${filename}`;
        console.log("Constructed full URL:", fullUrl);
        return fullUrl;
    }
    
    // For any other relative paths, assume they're from your API
    if (url.startsWith('/')) {
        const fullUrl = `https://ecomm.braventra.in${url}`;
        console.log("Constructed full URL from root path:", fullUrl);
        return fullUrl;
    }
    
    // If it doesn't start with /, assume it's a relative path and add domain
    const fullUrl = `https://ecomm.braventra.in/public/images/${url}`;
    console.log("Constructed full URL from filename:", fullUrl);
    return fullUrl;
};

// prop type 
type IProps = {
    style_2?: boolean;
    style_3?: boolean;
}

const AllProducts = ({style_2=false,style_3=false}:IProps) => {
    const [activeTab, setActiveTab] = React.useState('All Products');
    const [allProducts, setAllProducts] = React.useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>([]);
    const [categories, setCategories] = React.useState<ICategory[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    // Fetch products and categories on component mount
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                const productsResponse = await fetch('https://ecomm.braventra.in/api/products');
                if (!productsResponse.ok) {
                    throw new Error('Failed to fetch products');
                }
                const productsData: IApiResponse = await productsResponse.json();
                
                const categoriesResponse = await fetch('https://ecomm.braventra.in/api/category');
                if (!categoriesResponse.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const categoriesData: ICategoryResponse = await categoriesResponse.json();

                const fetchedProducts = productsData.data.products || [];
                console.log("Fetched products:", fetchedProducts);
                
                setAllProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
                setCategories(categoriesData.data.categories || []);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const tabs = ['All Products', ...categories.map(category => category.name)];

    const handleFilter = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'All Products') {
            setFilteredProducts(allProducts);
        } else {
            const category = categories.find(cat => cat.name === tab);
            if (category) {
                const filtered = allProducts.filter(
                    product => product.category_id === category.id
                );
                setFilteredProducts(filtered);
            } else {
                setFilteredProducts([]);
            }
        }
    }
    
    const productsToDisplay = filteredProducts;

    // Add debug logging to see what's happening with images
    React.useEffect(() => {
        if (productsToDisplay.length > 0) {
            console.log('=== PRODUCT IMAGES DEBUG ===');
            productsToDisplay.forEach(product => {
                const formattedUrl = formatImageUrl(product.image_url);
                console.log(`Product: ${product.name}`, {
                    product_id: product.product_id,
                    original_image_url: product.image_url,
                    formatted_image_url: formattedUrl,
                    category: categories.find(cat => cat.id === product.category_id)?.name,
                    has_image: !!product.image_url
                });
            });
            console.log('=== END DEBUG ===');
        }
    }, [productsToDisplay, categories]);

    if (loading) {
        return (
            <section className={`weekly-product-area ${style_2 ? 'whight-product pt-75 pb-75' : style_3 ? 'whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix' : 'grey-bg pb-70'}`}>
                <div className={`${style_3 ? 'container-fluid' : 'container'}`}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="tpsection mb-20">
                                <h4 className="tpsection__sub-title">~ Loading ~</h4>
                                <h4 className="tpsection__title">Please wait...</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className={`weekly-product-area ${style_2 ? 'whight-product pt-75 pb-75' : style_3 ? 'whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix' : 'grey-bg pb-70'}`}>
                <div className={`${style_3 ? 'container-fluid' : 'container'}`}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="tpsection mb-20">
                                <h4 className="tpsection__sub-title">~ Error ~</h4>
                                <h4 className="tpsection__title">{error}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className={`weekly-product-area ${style_2 ? 'whight-product pt-75 pb-75' : style_3 ? 'whight-product tpproduct__padding pt-75 pb-75 pl-65 pr-65 fix' : 'grey-bg pb-70'}`}>
                <div className={`${style_3 ? 'container-fluid' : 'container'}`}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="tpsection mb-20">
                                <h4 className="tpsection__sub-title">~ Special Products ~</h4>
                                <h4 className="tpsection__title">All available products</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tpnavtab__area pb-40">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab">
                                        {tabs.map((tab, index) => (
                                            <button
                                                key={index}
                                                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                                type="button"
                                                onClick={() => handleFilter(tab)}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                </nav>

                                <div className="tpproduct__arrow p-relative">
                                    {productsToDisplay.length > 0 ? (
                                        <Swiper {...slider_setting} modules={[Navigation]} className="swiper-container tpproduct-active tpslider-bottom p-relative">
                                            {productsToDisplay.map((product) => {
                                                const imageUrl = formatImageUrl(product.image_url);
                                                
                                                console.log(`Rendering product ${product.product_id}:`, {
                                                    name: product.name,
                                                    imageUrl: imageUrl
                                                });
                                                
                                                return (
                                                    <SwiperSlide key={product.product_id}>
                                                        {/* Wrapping ProductSingle with Link for navigation */}
                                                        <Link href={`/shop-details/${product.product_id}`} style={{ display: 'block', textDecoration: 'none' }}>
                                                            <ProductSingle product={{
                                                                id: product.product_id,
                                                                title: product.name,
                                                                price: parseFloat(product.price),
                                                                image: {
                                                                    id: product.product_id, 
                                                                    original: imageUrl,
                                                                },
                                                                smDesc: product.description, 
                                                                availability: product.stock_quantity > 0,
                                                                category: {
                                                                    parent: categories.find(cat => cat.id === product.category_id)?.name || 'Uncategorized',
                                                                    child: ''
                                                                }
                                                            } as any} />
                                                        </Link>
                                                    </SwiperSlide>
                                                );
                                            })}
                                        </Swiper>
                                    ) : (
                                        <div className="text-center py-5">
                                            <h5>No products found</h5>
                                        </div>
                                    )}
                                    <div className="tpproduct-btn">
                                        <div className="tpprduct-arrow tpproduct-btn__prv">
                                            <button type="button">
                                                <i className="icon-chevron-left"></i>
                                            </button>
                                        </div>
                                        <div className="tpprduct-arrow tpproduct-btn__nxt">
                                            <button type="button">
                                                <i className="icon-chevron-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tpproduct__all-item text-center">
                                <span>Discover thousands of other quality products. 
                                    <Link href="/shop">Shop All Products <i className="icon-chevrons-right"></i></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProducts;