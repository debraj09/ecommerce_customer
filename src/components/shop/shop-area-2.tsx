"use client";
import React, { useState } from "react";
import { FourColDots, ListDots, ThreeColDots } from "../svg";
import { IProductData } from "@/types/product-d-t";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import NiceSelect from "../ui/nice-select";
import ShopItems from "./shop-items";
import { useProductFilter } from "@/hooks/useFilter";
import CategoryArea from "../category/category-area";

// tabs
const col_tabs = [
  { title: "four-col", icon: <FourColDots /> },
  { title: "three-col", icon: <ThreeColDots /> },
  { title: "list", icon: <ListDots /> },
];

// prop type 
type IProps = {
  list_style?: boolean;
}
const ShopAreaTwo = ({list_style=false}:IProps) => {
  const { products, setProducts,handleSorting } = useProductFilter();
  const [activeTab, setActiveTab] = useState(list_style?col_tabs[2].title:col_tabs[0].title);
  const pagination_per_page = activeTab === "four-col" ? 12 : 9;
  const {currentItems,handlePageClick,pageCount} = usePagination<IProductData>(products, pagination_per_page);

  // handle active tab
  function handleActiveTab(tab: string) {
    setActiveTab(tab);
  }
  return (
    <>
      <section className="shop-area-start grey-bg pb-200">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="tpshop__details">
                <div className="tpshop__category">
                  <CategoryArea cls="inner-category-two" showCount={false} />
                </div>
                <div className="product__filter-content mb-30">
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <div className="product__item-count">
                        <span>Showing 1 -{currentItems.length} of {products.length}{" "} Products</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="tpproductnav tpnavbar product-filter-nav d-flex align-items-center justify-content-center">
                        <nav>
                          <div className="nav nav-tabs">
                            {col_tabs.map((tab, index) => (
                              <button
                                key={index}
                                className={`nav-link ${activeTab === tab.title ? "active" : ""}`}
                                onClick={() => handleActiveTab(tab.title)}
                              >
                                <i>{tab.icon}</i>
                              </button>
                            ))}
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product__navtabs d-flex justify-content-end align-items-center">
                        <div className="tp-shop-selector">
                          <NiceSelect
                            options={[
                              { value: "", label: "Default sorting" },
                              { value: "new", label: "New Arrivals" },
                              { value: "high", label: "Price High To Low" },
                              { value: "low", label: "Price Low To High" },
                            ]}
                            defaultCurrent={0}
                            onChange={(item) => handleSorting(item)}
                            name="Sorting"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shop items start */}
                <ShopItems
                  products={currentItems}
                  activeTab={activeTab}
                  currentItems={currentItems}
                />
                {/* shop items end */}
                <div className="basic-pagination text-center mt-35">
                  <nav>
                    <Pagination
                      handlePageClick={handlePageClick}
                      pageCount={pageCount}
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopAreaTwo;
