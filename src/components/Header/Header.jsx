import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={css.navbar}>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <NavLink
              className={({ isActive }) =>
                `${css.nav_link} ${isActive ? css.active : ''}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink
              className={({ isActive }) =>
                `${css.nav_link} ${isActive ? css.active : ''}`
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink
              className={({ isActive }) =>
                `${css.nav_link} ${isActive ? css.active : ''}`
              }
              to="/favourites"
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
