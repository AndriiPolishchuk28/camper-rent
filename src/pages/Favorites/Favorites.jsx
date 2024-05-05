import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/cars/selectors';
import ListItem from '../../components/ListOfCars/ListItem/ListItem';
import css from './Favorites.module.css';
import Container from '../../components/Container/Container';
import { NavLink } from 'react-router-dom';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavoriteCars);

  return (
    <Container>
      {favoritesCars.length ? (
        <ul className={css.wrapper_list}>
          {favoritesCars.map((car) => (
            <ListItem key={car.name} car={car} />
          ))}
        </ul>
      ) : (
        <p className={css.no_items}>
          No selected cars yet, go to
          <NavLink className={css.link} to="/catalog">
            {' '}
            Catalog
          </NavLink>
        </p>
      )}
    </Container>
  );
};

export default Favorites;
