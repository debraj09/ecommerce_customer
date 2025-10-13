export interface ICategoryData {
  id: number;
  img: string;
  name: string;
  slug: string;
  parent: string;
  children: string[];
  product_id: number[];
}