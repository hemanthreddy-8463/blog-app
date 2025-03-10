import { useState } from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addBlog } from "../redux/blogSlice";





const CreatePosts=()=>{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addBlog({id:uuidv4(),title,content}));
        navigate("/");

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="title" value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            required
            />
            <textarea
            placeholder="content"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            required
            ></textarea>
            <button type="submit">create</button>




        </form>        
            
        </>
    )
}
export default CreatePosts;
