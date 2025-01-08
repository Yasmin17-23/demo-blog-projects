import { useEffect, useState } from "react"
import './Blogs.css'
import BlogCard from "../BlogCard/BlogCard";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            fetch('./blogs.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
        }
        fetchData();
    }, [])
  return (
    <div className="blogs">
        <div>
            <h2>PlaceHolder Posts</h2>
        </div>
        <div className="blogs-content">
           {
             blogs.map(blog => (
                <BlogCard key={blog.blogId} blog={blog}></BlogCard>
             ))
           }
        </div>
    </div>
  )
}

export default Blogs