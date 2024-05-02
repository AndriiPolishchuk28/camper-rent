import css from './CatalogFilters.module.css';
import { icons } from '../../assets';

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
        <ul className={css.ul_wrapper}>
          <li className={css.li_item}>
            <svg className={css.icon_equipment} width={32} height={32}>
              <use href={`${icons}#icon-emission`}></use>
            </svg>
            <span>AC</span>
          </li>
          <li className={css.li_item}>
            <svg className={css.icon_equipment} width={32} height={32}>
              <use href={`${icons}#icon-transmission`}></use>
            </svg>
            <span>Automatic</span>
          </li>
          <li className={css.li_item}>
            <svg className={css.icon_equipment} width={32} height={32}>
              <use href={`${icons}#icon-cutlery`}></use>
            </svg>
            <span>Kitchen</span>
          </li>
          <li className={css.li_item}>
            <svg className={css.icon_equipment} width={32} height={32}>
              <use href={`${icons}#icon-tv`}></use>
            </svg>
            <span>TV</span>
          </li>
          <li className={css.li_item}>
            <svg className={css.icon_equipment} width={32} height={32}>
              <use href={`${icons}#icon-shower`}></use>
            </svg>
            <span>Shower/WC</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatalogFilters;
