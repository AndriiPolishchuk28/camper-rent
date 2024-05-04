import Container from '../../components/Container/Container';
import ListOfCars from '../../components/ListOfCars/ListOfCars';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <Container>
      {/* <div className={css.wrapper}> */}
      {/* <CatalogFilters /> */}
      <ListOfCars />
      {/* </div> */}
    </Container>
  );
};

export default Catalog;
