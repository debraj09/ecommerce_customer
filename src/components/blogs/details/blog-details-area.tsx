import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBlogData } from '@/types/blog-d-t';
import details_sm_1 from '@/assets/img/blog/blog-details-sm-1.jpg';
import details_sm_2 from '@/assets/img/blog/blog-details-sm-2.jpg';
import details_sm_3 from '@/assets/img/blog/blog-details-sm-3.jpg';
import author from '@/assets/img/blog/blog-details-author.jpg';
import BlogDetailsForm from '@/components/form/blog-details-form';
import BlogDetailsComments from './blog-details-comments';

// prop type 
type IProps = {
  blog: IBlogData;
}

const BlogDetailsArea = ({blog}: IProps) => {
  return (
    <section className="blog-details-area pb-50">
    <div className="container">
       <div className="row">
          <div className="col-lg-12">
             <div className="tp-blog-details__thumb">
                <Image src={blog.image} alt="" width={1410} height={882} style={{ height: "auto", width: "100%" }}/>
             </div>
          </div>
       </div>
       <div className="row">
          <div className="col-xl-10 col-lg-12">
             <div className="tp-blog-details__wrapper">
                <div className="tp-blog-details__content">
                   <div className="tpblog__entry-wap mb-5">
                      <span className="cat-links"><a href="#">{blog.category}</a></span>
                      <span className="author-by"><a href="#">{blog.author}</a></span>
                      <span className="post-data"><a href="#">{blog.date}</a></span>
                   </div>
                   <h2 className="tp-blog-details__title mb-25">{blog.title}</h2>
                   <p>
                      These are the people who make your life easier. Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen. The perfect way to enjoy brewing tea on low hanging fruit to identify. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                   </p>
                   <p>
                      Large tiles were arranged on the counter top plate near the window of the living room, they were connected to the kitchen counter through the opening in the existing building wall. For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or post regularly to Tumblr, or both. Tell people you’re trying to get better at photography. 
                   </p>
                   <div className="tp-blog-details__quation pt-15 pb-40 text-center">
                      <i>“  The disk at the bottom of the bowl can be turned counterclockwise to <br/> drain water when washing vegetables and it can be turned.  ” </i>
                   </div>
                   <p>
                      Form is an armless modern with a minimalistic expression. With a simple and contemporary design form Foody has a soft and welcoming silhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown an series of small, glass pendant lamps, originally designed for the restaurant. 
                   </p>
                </div>
                <div className="tp-blog-details__img">
                   <div className="row">
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__img-item mb-30">
                            <Image src={details_sm_1} alt="img" style={{height:'auto'}}/>
                         </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__img-item mb-30">
                            <Image src={details_sm_2} alt="img" style={{height:'auto'}}/>
                         </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                         <div className="tp-blog-details__img-item mb-30">
                            <Image src={details_sm_3} alt="img" style={{height:'auto'}}/>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="tp-blog-details__content">
                   <p>
                      Staying locked up in four walls have restricted our thinking. I feel like our limited thinking echoes through this wall. We are so used to schedules and predictable life that we have successfully suppressed our creative side. When you step out of these four walls on a peaceful morning, you realize how much nature has to offer to you. Its boundless. Your thoughts, worries, deadlines won’t resonate here.
                   </p>
                   <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. They’ll come on photo walks with you.
                   </p>
                </div>
                <div className="postbox__tag-border mb-45">
                   <div className="row align-items-center">
                      <div className="col-xl-7 col-lg-6 col-md-12">
                         <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                               <span>Tagged: </span>
                               <Link href="/blog">Furniture</Link>
                               <Link href="/blog">Table</Link>
                               <Link href="/blog">Fashion</Link>
                            </div>
                         </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-12">
                         <div className="postbox__social-tag">
                            <span>share:</span>
                            <a className="blog-d-lnkd" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="blog-d-pin" href="#"><i className="fab fa-pinterest-p"></i></a>
                            <a className="blog-d-fb" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="blog-d-tweet" href="#"><i className="fab fa-twitter"></i></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="tp-blog-details__post-link mb-15">
                   <div className="row">
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__post-item mb-30">
                            <span><i className="far fa-chevron-left"></i> Previous Post</span>
                            <a href="#">Popular Reasons You Must Drinks <br/> Juice Everyday</a>
                         </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                         <div className="tp-blog-details__post-item text-end mb-30">
                            <span>Next Post <i className="far fa-chevron-right"></i></span>
                            <a href="#">Transition Your Favorite Looks into <br/> Fall France </a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="tp-blog-details__author d-flex  mb-45">
                   <div className="tp-blog-details__author-img mr-30">
                      <Image src={author} alt="author"/>
                   </div>
                   <div className="tp-blog-details__author-text">
                      <h3 className="tp-blog-details__author-title">MICHAEL ANTHONY</h3>
                      <p>The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions.</p>
                      <a href="#" className="author-btn">All Author Posts</a>
                   </div>
                </div>
                <div className="postbox__comment mb-65">
                   <h3 className="postbox__comment-title mb-35">LEAVE A COMMENTs</h3>
                   {/* blog details comment */}
                   <BlogDetailsComments/>
                   {/* blog details comment */}
                </div>
                <div className="tpreview__form postbox__form">
                   <h4 className="tpreview__form-title mb-10">LEAVE A REPLY </h4>
                   <p>Your email address will not be published. Required fields are marked *</p>
                   {/* blog details form */}
                   <BlogDetailsForm/>
                   {/* blog details form */}
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default BlogDetailsArea;