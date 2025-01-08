
import { useLoaderData, useParams } from "react-router"
import './BlogDetails.css'
import { FiCalendar } from "react-icons/fi";
import Reviews from "../../components/Reviews/Reviews";



const BlogDetails = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    const { id } = useParams();
    const blog = blogs.find(blog => blog.blogId === id);
    console.log(blog);

    return (
        <div className="blog-details">
            <div className="blog-details-first">
                <div>
                    <img src={blog.image} alt="" />
                </div>
                <div className="blog-details-content">
                    <div className="content">
                        <div>
                            <h2>{blog.title}</h2>
                            <div className="blog-item">
                                <FiCalendar className="icon"></FiCalendar>
                                <p>{new Date(blog.publicationDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: '2-digit',
                                    year: 'numeric',
                                })}</p>
                            </div>
                        </div>
                        <div className="blog-btn">
                            <p>{blog.category}</p>
                        </div>
                    </div>
                    <div>
                        <p>{blog.shortExcerpt}</p>
                    </div>
                </div>
            </div>
            <div className="blog-review">
                <h3>Latest Reviews</h3>
                <div className="blog-details-review">

                    {
                        blog.reviews.map((review, idx) =>
                            <Reviews key={idx} review={review}></Reviews>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default BlogDetails