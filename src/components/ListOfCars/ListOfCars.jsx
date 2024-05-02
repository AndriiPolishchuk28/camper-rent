import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors';
import css from './ListOfCars.module.css';
import ListItem from './ListItem/ListItem';

const ListOfCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  console.log(cars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  return (
    <div className={css.wrapper_list}>
      <ul>
        {cars.map((elem) => (
          <ListItem
            key={elem.name}
            name={elem.name}
            img={elem.gallery[0]}
            price={elem.price}
            location={elem.location}
            reviews={elem.reviews.length}
            rating={elem.rating}
            description={elem.description}
            adults={elem.adults}
            transmission={elem.transmission}
            engine={elem.engine}
            kitchen={elem.details.kitchen}
            beds={elem.details.beds}
            ac={elem.details.airConditioner}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListOfCars;
