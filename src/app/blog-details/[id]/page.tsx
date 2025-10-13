import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/header/header";
import FeatureArea from "@/components/feature/feature-area";
import Footer from "@/layouts/footer/footer";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-3";
import BlogDetailsArea from "@/components/blogs/details/blog-details-area";
import blog_data from "@/data/blog-data"; // Import the local data source

export const metadata: Metadata = {
  title: "Blog Details - Orfarm",
};

// ----------------------------------------------------
// 1. FIX: generateStaticParams function
// This function tells Next.js which pages to pre-render at build time
// ----------------------------------------------------
export async function generateStaticParams() {
  // Map the local blog data to the format Next.js expects: { id: string }
  return blog_data.map((blog) => ({
    // The 'id' property must be a string, matching the [id] folder name
    id: blog.id.toString(), 
  }));
  /* Expected return value structure:
  [
    { id: '1' },
    { id: '2' },
    ...
  ]
  */
}


export default function BlogDetailsPage({params}:{params:{id:string}}) {
  // Note: params.id is a string, so we use Number() to match the blog_data ID type
  const blog = [...blog_data].find((item) => item.id === Number(params.id));
  
  // Handle case where blog post is not found (though should not happen with static export)
  if (!blog) {
    return <div className="text-center py-5">Blog Post Not Found</div>;
  }

  return (
    <Wrapper>
      <Header />

      <main>
        {/* 2. FIX: Breadcrumb is added */}
        
        {/* 3. FIX: BlogDetailsArea is added to render content */}
        <BlogDetailsArea blog={blog} />

        <FeatureArea style_2={true} />
      </main>

      <Footer />
    </Wrapper>
  );
}