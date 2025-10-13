'use client';
import React from 'react';
import BlogSidebar from './blog-sidebar';
import blog_data from '@/data/blog-data';
import BlogSingle from './single/blog-single';
import usePagination from '@/hooks/use-pagination';
import { IBlogData } from '@/types/blog-d-t';
import Pagination from '../ui/pagination';

// prop type 
type IProps = {
   left_side?: boolean;
} 
const BlogItemsFour = ({left_side}: IProps) => {
  const blog_items = [...blog_data];
  const {currentItems,handlePageClick,pageCount} = usePagination<IBlogData>(blog_items,6);
  return (
    <section className="blog-area pt-80">
    <div className="container">
       <div className="row">
          <div className={`col-xl-10 col-lg-9 ${left_side ? 'order-2' : ''}`}>
             <div className={`tpblog__left-wrapper ${left_side ? 'blog-left-sidebar' : ''}`}>
                <div className="tpblog__left-item ">
                   <div className="row">
                    {currentItems.map((b,i) => (
                      <div className="col-lg-6 col-md-6" key={i}>
                         <BlogSingle blog={b} style_2={true} bottom_show={true} />
                      </div>
                    ))}
                   </div>
                </div>
                <div className="tpbasic__pagination pr-100">
                   <div className="row">
                      <div className="col-lg-12">
                         <div className="basic-pagination text-center mb-80">
                            <nav>
                               <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
                             </nav>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-xl-2 col-lg-3">
            {/* blog sidebar */}
             <BlogSidebar left_sidebar={left_side}/>
            {/* blog sidebar */}
          </div>
       </div>
    </div>
 </section>
  );
};

export default BlogItemsFour;