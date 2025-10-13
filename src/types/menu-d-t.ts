export interface IMenuData {
  id: number;
  name: string;
  link: string;
  has_dropdown?: boolean;
  home_menus?: {
    title: string;
    img: string;
    link: string;
  }[];
  shop_menus?: {
    id: number;
    title: string;
    menus: {
      title: string;
      link: string;
    }[];
  }[];
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}