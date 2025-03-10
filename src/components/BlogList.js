import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../redux/blogSlice";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  return (
    <div>
      {blogs.length === 0 ? <h2>No Blogs Available</h2> : 
        blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <Link to={`/edit/${blog.id}`}>Edit</Link>
            <button onClick={() => dispatch(deleteBlog(blog.id))}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
