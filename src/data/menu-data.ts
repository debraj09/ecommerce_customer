import { IMenuData } from "@/types/menu-d-t";

const menu_data:IMenuData[] = [
  {
    id:1,
    name:'Home',
    link:'/',
    has_dropdown:true,
    home_menus:[
      {title:'Home Page V1',img:'/assets/img/header/home1-1.jpg',link:'/'},
      // {title:'Home Page V2',img:'/assets/img/header/home2-1.jpg',link:'/home-2'},
      // {title:'Home Page V3',img:'/assets/img/header/home3-1.jpg',link:'/home-3'},
      // {title:'Home Page V4',img:'/assets/img/header/home4-1.jpg',link:'/home-4'},
      // {title:'Home Page V5',img:'/assets/img/header/home5-1.jpg',link:'/home-5'},
      // {title:'Home Page V6',img:'/assets/img/header/home6-1.jpg',link:'/home-6'},
    ]
  },
  // {
  //   id:2,
  //   name:'Shop',
  //   link:'/shop',
  //   has_dropdown:true,
  //   shop_menus:[
  //     {
  //       id:1,
  //       title:'Shop layout',
  //       menus:[
  //         {title:'Shop Left sidebar',link:'/shop'},
        
  //       ]
  //     },
  //     {
  //       id:2,
  //       title:'Product layout',
  //       menus:[
  //         {title:'Product grid',link:'/shop-details-2'},
      
  //       ]
  //     },
  //     // {
  //     //   id:3,
  //     //   title:'Product type',
  //     //   menus:[
  //     //     {title:'Products Simple',link:'/shop-details'},
  //     //     {title:'Products Group',link:'/shop-details'},
  //     //     {title:'Products Variable',link:'/shop-details'},
  //     //     {title:'Special',link:'/shop-details'},
  //     //     {title:'Construction',link:'/shop-details'},
  //     //   ]
  //     // },
  //     {
  //       id:4,
  //       title:'Product category',
  //       menus:[
  //         {title:'Fresh bakery',link:'/shop-details'},
  //         {title:'Fresh fruits',link:'/shop-details'},
  //         {title:'Fresh meat',link:'/shop-details'},
  //         {title:'Fruit drink',link:'/shop-details'},
  //         {title:'Fresh bakery',link:'/shop-details'},
  //       ]
  //     },
  //   ]
  // },
  // {
  //   id:3,
  //   name:'Blog',
  //   link:'/blog',
  //   has_dropdown:true,
  //   dropdown_menus:[
  //     {title:'Big image',link:'/blog'},
  //     {title:'Right sidebar',link:'/blog-right-sidebar'},
  //     {title:'Left sidebar',link:'/blog-left-sidebar'},
  //     {title:'Single Post',link:'/blog-details'},
  //   ]
  // },
  // {
  //   id:4,
  //   name:'Pages',
  //   link:'/about',
  //   has_dropdown:true,
  //   dropdown_menus:[
  //     {title:'Shop Location One',link:'/shop-location'},
  //     {title:'Shop Location Two',link:'/shop-location-2'},
  //     {title:'FAQs',link:'/faq'},
  //     {title:'Checkout',link:'/checkout'},
  //     {title:'Cart Page',link:'/cart'},
  //     {title:'Compare Page',link:'/compare'},
  //     {title:'Wishlist',link:'/wishlist'},
  //     {title:'Sign In',link:'/login'},
  //     {title:'Coming soon',link:'/coming-soon'},
  //     {title:'Page 404',link:'/404'},
  //   ]
  // },
  // {
  //   id:5,
  //   name:'About Us',
  //   link:'/about',
  // },
  // {
  //   id:6,
  //   name:'Contact Us',
  //   link:'/contact',
  // },
]

export default menu_data;

// mobile menus 
export const mobile_menus = [
  {
    id:1,
    name:'Home',
    link:'/',
    has_dropdown:true,
    home_menus:[
      {title:'Home Page V1',img:'/assets/img/header/home1-1.jpg',link:'/'},
      {title:'Home Page V2',img:'/assets/img/header/home2-1.jpg',link:'/home-2'},
      {title:'Home Page V3',img:'/assets/img/header/home3-1.jpg',link:'/home-3'},
      {title:'Home Page V4',img:'/assets/img/header/home4-1.jpg',link:'/home-4'},
      {title:'Home Page V5',img:'/assets/img/header/home5-1.jpg',link:'/home-5'},
      {title:'Home Page V6',img:'/assets/img/header/home6-1.jpg',link:'/home-6'},
    ]
  },
  {
    id:2,
    name:'Shop',
    link:'/shop',
    has_dropdown:true,
    dropdown_menus:[
      {title:'Shop Left sidebar',link:'/shop'},
      {title:'Shop Without Banner',link:'/shop-2'},
      {title:'Shop Version',link:'/shop-3'},
      {title:'Shop Right sidebar',link:'/shop-right'},
      {title:'Shop List view',link:'/shop-list'},
    ]
  },
  {
    id:3,
    name:'Shop Details',
    link:'/shop-details',
    has_dropdown:true,
    dropdown_menus:[
      {title:'Image scroll',link:'/shop-details'},
      {title:'Product grid',link:'/shop-details-2'},
      {title:'Top Thumb Product',link:'/shop-details-3'},
      {title:'Simple Product',link:'/shop-details'},
    ]
  },
  {
    id:4,
    name:'Blog',
    link:'/blog',
    has_dropdown:true,
    dropdown_menus:[
      {title:'Big image',link:'/blog'},
      {title:'Right sidebar',link:'/blog-right-sidebar'},
      {title:'Left sidebar',link:'/blog-left-sidebar'},
      {title:'Single Post',link:'/blog-details'},
    ]
  },
  {
    id:5,
    name:'Pages',
    link:'/about',
    has_dropdown:true,
    dropdown_menus:[
      {title:'Shop Location One',link:'/shop-location'},
      {title:'Shop Location Two',link:'/shop-location-2'},
      {title:'FAQs',link:'/faq'},
      {title:'Checkout',link:'/checkout'},
      {title:'Cart Page',link:'/cart'},
      {title:'Compare Page',link:'/compare'},
      {title:'Wishlist',link:'/wishlist'},
      {title:'Sign In',link:'/login'},
      {title:'Coming soon',link:'/coming-soon'},
      {title:'Page 404',link:'/404'},
    ]
  },
  {
    id:6,
    name:'About Us',
    link:'/about',
  },
  {
    id:7,
    name:'Contact Us',
    link:'/contact',
  },
]