import SingleBlog from './SingleBlog';
import {blogs} from '../../data/blog';

const RecentBlog = () => {
  const recentBlogs = blogs.filter((blog) => blog.status === "recent");
  return (
    <div className="blogs">
      {
        recentBlogs.map((blog) => <SingleBlog key={blog.id} blog={blog}/>)
      }
    </div>
  )
}

export default RecentBlog