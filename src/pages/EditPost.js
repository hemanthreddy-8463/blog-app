import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlog } from "../redux/blogSlice";




const EditPost=()=>{
    const { id } = useParams();
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const existingBlog = blogs.find((blog) => blog.id === id);
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [content, setContent] = useState(existingBlog?.content || "");

  useEffect(() => {
    if (!existingBlog) navigate("/");
  }, [existingBlog, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBlog({ id, title, content }));
    navigate("/");
  };


    return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Update</button>
    </form>
    )

}
export default EditPost;