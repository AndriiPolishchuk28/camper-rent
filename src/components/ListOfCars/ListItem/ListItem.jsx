import css from './ListItem.module.css';
import { icons } from '../../../assets';
import classNames from 'classnames';

const ListItem = ({
  name,
  img,
  price,
  location,
  reviews,
  rating,
  description,
  adults,
  transmission,
  engine,
  kitchen,
  beds,
  ac,
}) => {
  return (
    <li className={css.item_wrapper}>
      <img className={css.img} src={img} alt="car-photo" />
      <div className={css.info_wrapper}>
        <div className={css.title_wrapper}>
          <p className={css.car_name}>{name}</p>
          <div className={css.price_wrapper}>
            <span className={css.price}>&#8364;{price}</span>
            <button className={css.btn_favourites}>
              <svg width={30} height={30} className={css.svg_heart}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.rating_wrapper}>
          <svg width={16} height={16} className={css.svg_star}>
            <use href={`${icons}#icon-star`}></use>
          </svg>
          <span
            className={css.rating_text}
          >{`${rating}(${reviews} Reviews)`}</span>
          <div className={css.location_wrapper}>
            <svg width={16} height={16} className={css.svg_location}>
              <use href={`${icons}#icon-map-pin`}></use>
            </svg>
            <span>{location}</span>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.detail_list_wrapper}>
          <li className={css.details_item}>
            <svg width={20} height={20} className={css.svg_details}>
              <use href={`${icons}#icon-users`}></use>
            </svg>
            <span className={css.details_text}>{adults} Adults</span>
          </li>
          <li className={css.details_item}>
            <svg
              width={20}
              height={20}
              className={classNames(css.svg_details, css.svg_transparent)}
            >
              <use href={`${icons}#icon-transmission`}></use>
            </svg>
            <span className={css.details_text}>{transmission}</span>
          </li>
          <li className={css.details_item}>
            <svg width={20} height={20} className={css.svg_details}>
              <use href={`${icons}#icon-petrol`}></use>
            </svg>
            <span className={css.details_text}>{engine}</span>
          </li>
          {Boolean(kitchen) && (
            <li className={css.details_item}>
              <svg
                width={20}
                height={20}
                className={classNames(css.svg_details, css.svg_transparent)}
              >
                <use href={`${icons}#icon-cutlery`}></use>
              </svg>
              <span className={css.details_text}>kitchen</span>
            </li>
          )}
          <li className={css.details_item}>
            <svg
              width={20}
              height={20}
              className={classNames(css.svg_details, css.svg_transparent)}
            >
              <use href={`${icons}#icon-sofa`}></use>
            </svg>
            <span className={css.details_text}>{beds} beds</span>
          </li>
          {Boolean(ac) && (
            <li className={css.details_item}>
              <svg
                width={20}
                height={20}
                className={classNames(css.svg_details, css.svg_transparent)}
              >
                <use href={`${icons}#icon-air-conditioner`}></use>
              </svg>
              <span className={css.details_text}>AC</span>
            </li>
          )}
        </ul>
        <button className={css.btn_showmore}>Show more</button>
      </div>
    </li>
  );
};

export default ListItem;
