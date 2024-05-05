import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import { selectCars, selectPage } from '../../redux/cars/selectors';
import css from './ListOfCars.module.css';
import ListItem from './ListItem/ListItem';
import { increasePage, resetCars } from '../../redux/cars/carsSlice';

const ListOfCars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const totalItems = 13;
  const ceilPage = Math.ceil(totalItems / 4);

  const handleLoadMore = () => {
    dispatch(increasePage());
  };

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(resetCars());
    };
  }, [dispatch]);

  return (
    <div className={css.listCars_wrapper}>
      <ul className={css.wrapper_list}>
        {cars.map((car) => (
          <ListItem key={car.name} car={car} />
        ))}
      </ul>
      {page < ceilPage && (
        <button onClick={handleLoadMore} className={css.btn_loadmore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default ListOfCars;
