import css from './CatalogFilters.module.css';
import { icons } from '../../assets';
import { filtersArray } from '../../constants/constants';
import Checkbox from './Checkbox/Checkbox';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';

const CatalogFilters = () => {
  const [filtered, setFiltered] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const cars = useSelector(selectCars);

  const handleFiltered = () => {
    const arr = cars.filter((car) => {
      return filtered.every((filter) => car.details[filter]);
    });
    console.log(arr);
    setFilteredCars(arr);
  };

  const handleFilter = (name, checked) => {
    setFiltered((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );
  };

  // useEffect(() => {
  //   console.log(filtered);
  // }, [filtered]);

  return (
    <div className={css.wrapper_filters}>
      <label className={css.label_text} htmlFor="location">
        Location
      </label>
      <div className={css.wrapper_input}>
        <input
          className={css.input}
          type="text"
          id="location"
          placeholder="City"
        />
        <svg className={css.svg_icon} width={18} height={20}>
          <use href={`${icons}#icon-map-pin`}></use>
        </svg>
      </div>
      <div className={css.wrapper_vehicle_filters}>
        <p className={css.filters_text}>Filters</p>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.ul_wrapper}>
          {Object.entries(filtersArray).map(([key, value]) => (
            <Checkbox
              key={nanoid()}
              svgName={key}
              name={value}
              onFilter={handleFilter}
              checkedItems={filtered}
            />
          ))}
        </div>
      </div>
      <button onClick={handleFiltered}>Search</button>
    </div>
  );
};

export default CatalogFilters;
