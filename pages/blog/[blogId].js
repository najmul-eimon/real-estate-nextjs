import { useState, useEffect } from 'react';
import Head from 'next/head';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { useRouter } from 'next/router';
import { blogs } from '../../data/blog';
import Details from '../../components/blogDetails/Details';

const BlogDetails = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    if(blogId){
      setSingleBlog(blogs.find(({id}) => id === blogId))
    }
  },[blogId]);

  return (
    <>
      <Head>
        <title>Real Estate | Blog Details</title>
      </Head>
      <Breadcrumb
        data={[
          {
            label: "Blog",
            link: "/blog",
          },
        ]}
        activePage="Blog Details"
      />
      <Details data={singleBlog}/>
    </>
  )
}

export default BlogDetails