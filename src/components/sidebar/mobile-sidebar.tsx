"use client";
import React from "react";
import Link from "next/link";
import MobileMenus from "@/layouts/header/mobile-menus";
import category_data from "@/data/category-data";
import { useRouter } from "next/navigation";

// prop type
type IProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar = ({ isSidebarOpen, setIsSidebarOpen }: IProps) => {
  const categories = [...category_data];
  const router = useRouter();
  return (
    <>
      <div className={`tpsideinfo ${isSidebarOpen ? "tp-sidebar-opened" : ""}`}>
        <button
          className="tpsideinfo__close"
          onClick={() => setIsSidebarOpen(false)}
        >
          Close<i className="fal fa-times ml-10"></i>
        </button>
        <div className="tpsideinfo__search text-center pt-35">
          <span className="tpsideinfo__search-title mb-20">
            What Are You Looking For?
          </span>
          <form action="#">
            <input type="text" placeholder="Search Products..." />
            <button>
              <i className="icon-search"></i>
            </button>
          </form>
        </div>
        <div className="tpsideinfo__nabtab">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                tabIndex={-1}
              >
                Menu
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                tabIndex={-1}
              >
                Categories
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="mobile-menu mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav">
                    {/* Mobile Menus */}
                    <MobileMenus/>
                    {/* Mobile Menus */}
                  </nav>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="tpsidebar-categories">
                <ul>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <a className="text-white pointer" 
                        onClick={() => router.push(`/search?category=${category.name.split(" ").join("-").toLowerCase()}`) }>
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tpsideinfo__account-link">
          <Link href="/login">
            <i className="icon-user icons"></i> Login / Register
          </Link>
        </div>
        <div className="tpsideinfo__wishlist-link">
          <Link href="/wishlist">
            <i className="icon-heart"></i> Wishlist
          </Link>
        </div>
      </div>

      {/* overlay start  */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={"body-overlay " + (isSidebarOpen ? "opened" : "")}
      ></div>
      {/* overlay end  */}
    </>
  );
};

export default MobileSidebar;
