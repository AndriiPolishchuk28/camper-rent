import Container from '../../components/Container/Container';
import ListOfCars from '../../components/ListOfCars/ListOfCars';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectisLoading } from '../../redux/cars/selectors';
import CatalogFilters from '../../components/CatalogFilters/CatalogFilters';

const Catalog = () => {
  const isLoading = useSelector(selectisLoading);
  return (
    <Container>
      {isLoading && <Loader />}
      <CatalogFilters />
      <ListOfCars />
    </Container>
  );
};

export default Catalog;
