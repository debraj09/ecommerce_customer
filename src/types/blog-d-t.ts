import { StaticImageData } from "next/image";

export interface IBlogData {
  id: number;
  title: string;
  image: StaticImageData;
  author: string;
  category: string;
  desc: string;
  date: string;
  blog: string;
}