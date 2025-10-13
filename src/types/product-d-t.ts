export type IReview = {
  id: number;
  name: string;
  comment: string;
  rating: number;
  user: string;
  date: string;
}

export interface IProductData {
  id: number;
  sku: string;
  title: string;
  price: number;
  sale_price?: number;
  image: {
    id: number;
    original: string;
    thumbnail?: string;
  };
  category: {
    parent: string;
    child: string;
  };
  quantity: number;
  unit: string;
  gallery?: string[];
  description: string;
  videoId: string | null;
  orderQuantity?:number;
  productInfoList?:string[],
  additionalInfo?: {
    key: string;
    value: string;
  }[],
  reviews:IReview[];
  tags: string[];
  status: string;
  brand: string;
  sold: number;
  created_at: string;
  updated_at: string;
  color?: string[];
  offerDate?:{
    startDate:string;
    endDate:string;
  }
}