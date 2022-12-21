import Head from "next/head";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Blog from "../../components/blog/Blog";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate | Blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Breadcrumb data={[]} activePage="Blog" />
      <Blog data={"blog-page"} />
    </>
  );
};

export default BlogPage;
