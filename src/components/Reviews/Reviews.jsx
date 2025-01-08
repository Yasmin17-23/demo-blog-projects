import PropTypes from "prop-types";
import './Review.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Reviews = ({ review }) => {
    const { reviewerName, rating, reviewDate, reviewTitle, reviewDescription, reviewerImg } = review;

    return (
        <div>

            <div className="review-card">
                <div>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                </div>
               <div className="review-body">
               <h4>{reviewTitle}</h4>
               <p>{reviewDescription}</p>
               </div>
                <div className="reviewer">
                    <img src={reviewerImg} alt="" />
                    <div>
                        <h3>{reviewerName}</h3>
                        <p>{new Date(reviewDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: '2-digit',
                                    year: 'numeric',
                                })}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Reviews.propTypes = {
    review: PropTypes.object,
}
export default Reviews