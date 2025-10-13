import React from "react";
import { IBlogData } from "@/types/blog-d-t";
import Image from "next/image";
import Link from "next/link";

// prop type
type Props = {
  blog: IBlogData;
  bottom_show?: boolean;
  style_2?: boolean;
};

const BlogSingle = ({ blog, bottom_show,style_2 }: Props) => {
  return (
    <div className={`tpblog__item ${style_2 ? "tpblog__item-2 mb-20" : ""}`}>
      <div className="tpblog__thumb fix">
        <Link href={`/blog-details/${blog.id}`}>
          <Image src={blog.image} alt="blog-img" style={{ height: "auto" }} />
        </Link>
      </div>
      <div className="tpblog__wrapper">
        <div className="tpblog__entry-wap">
          <span className="cat-links">
            <Link href={`/blog-details/${blog.id}`}>{blog.category}</Link>
          </span>
          <span className="author-by">
            <a href="#">{blog.author}</a>
          </span>
          <span className="post-data">
            <a href="#">{blog.date}</a>
          </span>
        </div>
        <h4 className="tpblog__title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
        {bottom_show && (
          <>
            <p>{blog.desc}...</p>
            <div className="tpblog__details">
              <Link href={`/blog-details/${blog.id}`}>
                Continue reading <i className="icon-chevrons-right"></i>{" "}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSingle;
