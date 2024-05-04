import css from './ListItem.module.css';
import { icons } from '../../../assets';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { addCar, deleteCar } from '../../../redux/cars/carsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../../redux/cars/selectors';
import ModalShowMore from '../../ModalShowMore/ModalShowMore';

const ListItem = ({ car }) => {
  const {
    name,
    gallery,
    price,
    location,
    reviews,
    rating,
    description,
    adults,
    transmission,
    engine,
    details,
    _id: id,
  } = car;
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavoriteCars);
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (favoritesCars.find((car) => car._id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritesCars, id]);

  const handleFavoriteClick = () => {
    if (favoritesCars.find((car) => car._id === id)) {
      dispatch(deleteCar(car._id));
    } else {
      dispatch(addCar(car));
    }
  };
  return (
    <li className={css.item_wrapper}>
      <img className={css.img} src={gallery[0]} alt="car-photo" />
      <div className={css.info_wrapper}>
        <div className={css.title_wrapper}>
          <p className={css.car_name}>{name}</p>
          <div className={css.price_wrapper}>
            <span className={css.price}>&#8364;{price}</span>
            <button
              onClick={handleFavoriteClick}
              className={css.btn_favourites}
            >
              <svg
                width={30}
                height={30}
                className={isFavorite ? css.svg_heart_red : css.svg_heart}
              >
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
          >{`${rating}(${reviews.length} Reviews)`}</span>
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
          {Boolean(details.kitchen) && (
            <li className={css.details_item}>
              <svg
                width={20}
                height={20}
                className={classNames(css.svg_details, css.svg_transparent)}
              >
                <use href={`${icons}#icon-kitchen`}></use>
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
              <use href={`${icons}#icon-beds`}></use>
            </svg>
            <span className={css.details_text}>{details.beds} beds</span>
          </li>
          {Boolean(details.airConditioner) && (
            <li className={css.details_item}>
              <svg
                width={20}
                height={20}
                className={classNames(css.svg_details, css.svg_transparent)}
              >
                <use href={`${icons}#icon-airConditioner`}></use>
              </svg>
              <span className={css.details_text}>AC</span>
            </li>
          )}
        </ul>
        <button onClick={openModal} className={css.btn_showmore}>
          Show more
        </button>
        {modalIsOpen && (
          <ModalShowMore
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            car={car}
          />
        )}
      </div>
    </li>
  );
};

export default ListItem;
