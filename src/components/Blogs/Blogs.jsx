import { useEffect, useState } from "react";
import './Blogs.css'
import BlogCard from "../BlogCard/BlogCard";
import { FaSearch } from "react-icons/fa";



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

    

    const handleFilterSearch = event => {
      const searchText = event.target.value;
    
      const filterCategory = blogs.filter(blog => {
         return blog.category.toLowerCase().includes(searchText.toLowerCase())
      })

      setBlogs(filterCategory);

  
    }
  return (
    <div className="blogs">
        <div className="search-content">
            <h2>PlaceHolder Posts</h2>
            <div className="search">
            <div className="searchInput">
               <input type="text" name="search" id="" placeholder="Search" onChange={handleFilterSearch}/>
              <div className="search-icon">
              <FaSearch  ></FaSearch>
              </div>
            </div>
            </div>
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