import { useState } from 'react';
import css from './Checkbox.module.css';
import classNames from 'classnames';
import { icons } from '../../../assets';

const Checkbox = ({ name, svgName, onFilter, checkedItems }) => {
  const checked = checkedItems.includes(svgName);

  const handleChecked = (e) => {
    const { checked } = e.target;
    onFilter(svgName, checked);
  };

  return (
    <label className={css.label}>
      <input
        className={classNames(css.visually_hidden)}
        type="checkbox"
        onChange={handleChecked}
        checked={checked}
        name={svgName}
      />
      <div
        className={classNames(
          css.item_wrapper,
          checked ? css.checked_border : ''
        )}
      >
        <svg className={css.icon_equipment} width={32} height={32}>
          <use href={`${icons}#icon-${svgName}`}></use>
        </svg>
        <span>{name}</span>
      </div>
    </label>
  );
};

export default Checkbox;
