import React from 'react';
import SingleBlog from './SingleBlog';
import {blogs} from '../../data/blog';

const AllBlog = () => {
  const otherBlogs = blogs.filter((blog) => blog.status !== "recent");
  return (
    <div className="blogs">
      {
        otherBlogs.map((blog) => <SingleBlog key={blog.id} blog={blog}/>)
      }
    </div>
  )
}

export default AllBlog