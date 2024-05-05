import Container from '../../components/Container/Container';
import ListOfCars from '../../components/ListOfCars/ListOfCars';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectisLoading } from '../../redux/cars/selectors';

const Catalog = () => {
  const isLoading = useSelector(selectisLoading);
  return (
    <Container>
      {/* <div className={css.wrapper}> */}
      {/* <CatalogFilters /> */}
      {isLoading && <Loader />}
      <ListOfCars />

      {/* </div> */}
    </Container>
  );
};

export default Catalog;
