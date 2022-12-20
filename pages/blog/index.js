import Head from "next/head";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Blog from "../../components/blog/Blog";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate | Blog</title>
      </Head>
      <Breadcrumb data={[]} activePage="Blog" />
      <Blog data={"blog-page"} />
    </>
  );
};

export default BlogPage;
