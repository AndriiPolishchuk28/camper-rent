import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/selectors';
import ListItem from '../../components/ListOfCars/ListItem/ListItem';
import css from './Favorites.module.css';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavoriteCars);

  return (
    <ul className={css.wrapper_list}>
      {favoritesCars.length ? (
        favoritesCars.map((car) => <ListItem key={car.name} car={car} />)
      ) : (
        <p>No selected cars yet</p>
      )}
    </ul>
  );
};

export default Favorites;
