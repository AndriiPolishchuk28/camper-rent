import css from './Reviews.module.css';
import { icons } from '../../assets';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';

const Reviews = ({ reviews }) => {
  const generateStar = (yellowStars) => {
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      const starColor = i < yellowStars ? css.svg_yellow : css.svg_basic_color;
      stars.push(
        <svg className={starColor} key={nanoid()} width={16} height={16}>
          <use href={`${icons}#icon-star`}></use>
        </svg>
      );
    }
    return stars;
  };
  return (
    <div className={css.main_wrapper}>
      <ul className={css.review_list}>
        {reviews.map(({ reviewer_name, comment, reviewer_rating }) => (
          <li className={css.review_item} key={nanoid()}>
            <div className={css.title_wrapper}>
              <div className={css.circle}>
                <span className={css.first_letter}>
                  {reviewer_name.charAt(0)}
                </span>
              </div>
              <div className={css.name_wrapper}>
                <p className={css.name}>{reviewer_name}</p>
                <ul className={css.stars_wrapper}>
                  {generateStar(reviewer_rating).map((star, index) => (
                    <li key={index}>{star}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.comment}>{comment}</p>
          </li>
        ))}
      </ul>
      <ContactForm />
    </div>
  );
};

export default Reviews;
