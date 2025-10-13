import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blog_data from '@/data/blog-data';

// prop type 
type IProps = {
  left_sidebar?: boolean;
}
const BlogSidebar = ({left_sidebar}:IProps) => {
  const recent_post = [...blog_data].slice(-4);
  return (
    <div className={`tpblog__right-item ${left_sidebar?'blog-left-sidebar':''} pb-50`}>
      <div className="sidebar__widget mb-30">
          <div className="sidebar__widget-content">
            <div className="sidebar__search">
                <form action="#">
                  <div className="sidebar__search p-relative">
                      <input type="text" placeholder="Search"/>
                      <button type="submit"><i className="far fa-search"></i></button>
                  </div>
                </form>
            </div>
          </div>
      </div>
      <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title mb-15">Blog Categories</h3>
          <div className="sidebar__widget-content">
            <ul>
                <li><Link href="/blog-details">Healthy Foods <span>(15)</span></Link></li>
                <li><Link href="/blog-details">Dairy Farm <span>(12)</span></Link></li>
                <li><Link href="/blog-details">Lifestyle <span>(10)</span></Link></li>
                <li><Link href="/blog-details">Tips & Tricks <span>(15)</span></Link></li>
                <li><Link href="/blog-details">Shopping <span>(13)</span></Link></li>
                <li><Link href="/blog-details">Organics <span>(08)</span></Link></li>
                <li><Link href="/blog-details">Photography <span>(17)</span></Link></li>
                <li><Link href="/blog-details">Uncategorized <span>(02)</span></Link></li>
            </ul>
          </div>
      </div>
      <div className="sidebar__widget mb-35">
          <h3 className="sidebar__widget-title mb-15">Recent Posts</h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              {recent_post.map((post) => (
                <div key={post.id} className="rc__post mb-20 d-flex align-items-center">
                <div className="rc__post-thumb">
                    <Link href="/blog-details">
                      <Image src={post.image} alt="blog-sidebar" width={70} height={70}/>
                    </Link>
                </div>
                <div className="rc__post-content">
                    <h3 className="rc__post-title">
                      <Link href="/blog-details">{post.title}</Link>
                    </h3>
                    <div className="rc__meta">
                      <span>{post.date}</span>
                    </div>
                </div>
              </div>
              ))}
            </div>
          </div>
      </div>
      <div className="sidebar__widget mb-55">
          <h3 className="sidebar__widget-title mb-15">Tags</h3>
          <div className="sidebar__widget-content">
            <div className="tagcloud">
                <Link href="/blog-details">healthy</Link>
                <Link href="/blog-details">natural</Link>
                <Link href="/blog-details">salad</Link>
                <Link href="/blog-details">foods</Link>
                <Link href="/blog-details">orfarm</Link>
                <Link href="/blog-details">meat</Link>
                <Link href="/blog-details">grocery </Link>
                <Link href="/blog-details">fresh</Link>
                <Link href="/blog-details">vegan</Link>
                <Link href="/blog-details">vegetables</Link>
                <Link href="/blog-details">seafoods</Link>
                <Link href="/blog-details">fruits</Link>
                <Link href="/blog-details">tomato</Link>
                <Link href="/blog-details">cooking</Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogSidebar;