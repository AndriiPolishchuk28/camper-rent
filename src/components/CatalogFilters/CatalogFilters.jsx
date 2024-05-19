import css from './CatalogFilters.module.css';
import { icons } from '../../assets';
import { filtersArray } from '../../constants/constants';
import Checkbox from './Checkbox/Checkbox';
import { nanoid } from 'nanoid';

const CatalogFilters = () => {
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
            <Checkbox key={nanoid()} svgName={key} name={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogFilters;
