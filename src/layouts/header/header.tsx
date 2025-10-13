'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import Menus from './menus';
import logo from '@/assets/img/logo/logo.png';
import cart_icon from '@/assets/img/icon/cart-1.svg';
import useSticky from '@/hooks/use-sticky';
import HeaderTop from './header-top';
import SearchPopup from '@/components/common/modal/search-popup';
import CartSidebar from '@/components/sidebar/cart-sidebar';
import useCartInfo from '@/hooks/use-cart-info';
import MobileSidebar from '@/components/sidebar/mobile-sidebar';

const Header = () => {
  const {sticky} = useSticky();
  const {quantity} = useCartInfo();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isMobileSidebarOpen,setIsMobileSidebarOpen] = React.useState(false);
  return (
    <>
     <header>
         {/* header top start */}
         <HeaderTop/>
         {/* header top end */}
         <div id="header-sticky" className={`header__main-area d-none d-xl-block ${sticky ? 'header-sticky' : ''}`}>
            <div className="container">
               <div className="header__for-megamenu p-relative">
                  <div className="row align-items-center">
                     <div className="col-xl-3">
                        <div className="header__logo">
                           <Link href="/">
                              <Image src={logo} alt="logo" style={{height: 'auto'}}/>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div className="header__menu main-menu text-center">
                           {/* menus start */}
                           <Menus />
                           {/* menus end */}
                        </div>
                     </div>
                     <div className="col-xl-3">
                        <div className="header__info d-flex align-items-center">
                           <div className="header__info-search tpcolor__purple ml-10">
                              <button onClick={() => setIsSearchOpen(true)} className="tp-search-toggle"><i className="icon-search"></i></button>
                           </div>
                           <div className="header__info-user tpcolor__yellow ml-10">
                              <Link href="/login"><i className="icon-user"></i></Link>
                           </div>
                           <div className="header__info-wishlist tpcolor__greenish ml-10">
                              <Link href="/wishlist"><i className="icon-heart icons"></i></Link>
                           </div>
                           <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                              <button onClick={() => setIsCartOpen(true)}>
                                 <i>
                                    <Image src={cart_icon} alt="icon"/>
                                 </i>
                                 <span>{quantity}</span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* mobile-menu-area */}
         <div id="header-sticky-2" className={`tpmobile-menu secondary-mobile-menu d-xl-none ${sticky ? 'header-sticky' : ''}`}>
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4 col-3 col-sm-3">
                     <div className="mobile-menu-icon">
                        <button onClick={() => setIsMobileSidebarOpen(true)} className="tp-menu-toggle"><i className="icon-menu1"></i></button>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 col-sm-4">
                     <div className="header__logo text-center">
                        <Link href="/">
                           <Image src={logo} alt="logo" style={{height: 'auto'}}/>
                        </Link>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-3 col-sm-5">
                     <div className="header__info d-flex align-items-center">
                        <div className="header__info-search tpcolor__purple ml-10 d-none d-sm-block">
                           <button onClick={() => setIsSearchOpen(true)} className="tp-search-toggle"><i className="icon-search"></i></button>
                        </div>
                        <div className="header__info-user tpcolor__yellow ml-10 d-none d-sm-block">
                           <Link href="/login"><i className="icon-user"></i></Link>
                        </div>
                        <div className="header__info-wishlist tpcolor__greenish ml-10 d-none d-sm-block">
                           <Link href="/wishlist"><i className="icon-heart icons"></i></Link>
                        </div>
                        <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                           <button onClick={() => setIsCartOpen(true)}>
                              <i><Image src={cart_icon} alt="icon"/></i>
                              <span>{quantity}</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* mobile-menu-area-end */}

         {/* search popup start */}
         <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
         {/* search popup end */}

         {/* cart sidebar start */}
         <CartSidebar isCartSidebarOpen={isCartOpen} setIsCartSidebarOpen={setIsCartOpen}/>
         {/* cart sidebar end */}

         {/* mobile-menu start */}
         <MobileSidebar isSidebarOpen={isMobileSidebarOpen} setIsSidebarOpen={setIsMobileSidebarOpen} />
         {/* mobile-menu end */}
     
      </header> 
    </>
  );
};

export default Header;