import { createSlice } from "@reduxjs/toolkit"; // ✅ Correct import


const initialState={
    blogs:[],
};

const blogSlice= createSlice({
    name:'blogs',
    initialState,
    reducers:{
        addBlog:(state,action)=>{
            state.blogs.push(action.payload);
        },
        editBlog:(state,action)=>{
            const index=state.blogs.findIndex((blog)=>blog.id===action.payload.id);
            if(index!==-1){
                state.blog[index]=action.payload;
            }
        },
        deleteBlog: (state,action)=>{
            state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
        }
    }
})

export const { addBlog, editBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
