import {create} from 'zustand';
 
const useBlog = create((set) => ({
  blogs: [],
  addBlog: (blog) => set((state) => ({blogs: [...state.blogs, blog]})),
  removeBlog: (id) => set((state) => ({blogs: state.blogs.filter(blog => blog.id !== id)})),
  setBlogs: (blogs) => set(() => ({blogs})),
}));

export default useBlog;
