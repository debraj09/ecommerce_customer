import { IProductData } from "@/types/product-d-t";


export const setLocalStorage = (name:string, items:IProductData[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(name, JSON.stringify(items));
  }
}

export const getLocalStorage = (name:string) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    } else {
      localStorage.setItem(name, JSON.stringify([]));
      return [];
    }
  } else {
    return [];
  }
}
