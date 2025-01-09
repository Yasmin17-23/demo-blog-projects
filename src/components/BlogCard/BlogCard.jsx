import PropTypes from "prop-types";
import './BlogCard.css'
import { FiCalendar } from "react-icons/fi";
import { Link, useOutletContext } from "react-router";
import { FaEye } from "react-icons/fa";


const BlogCard = ({ blog }) => {
   const { handleBellCounter } = useOutletContext();
   const { blogId, image, title, category, shortExcerpt, publicationDate, blogView } = blog;
  
   return (
      <div onClick={handleBellCounter}>       
         <div className="card">
            <div className="card-img">
               <img src={image} alt="" />
               <div className="view">
                  <FaEye className="view-icon"></FaEye>
                  <p>{blogView}</p>
               </div>
            </div>
            <div className="card-body">
               <div className="card-content">
                  <div>
                     <FiCalendar className="card-icon" />
                     <p>{new Date(publicationDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                     })}</p>
                  </div>
                 <div>
                  <p className="btn">{category}</p>
                 </div>
               </div>
               <h4>{title}</h4>
               <p>{shortExcerpt.substring(0, 70)}...
                  <Link to={`/blog/${blogId}`} className="link">Read More</Link>
               </p>
            </div>
         </div>
       
      </div>
   )
}

BlogCard.propTypes = {
   blog: PropTypes.object,
  
}

export default BlogCard