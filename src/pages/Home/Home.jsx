import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.bg_img}>
      <div className={css.info_wrapper}>
        <div className={css.bg_text}>
          <p className={css.text}>
            Embark on your next great adventure with our premium camper vans.
            Designed for comfort, durability, and style, our campers are the
            perfect companion for your journey into the great outdoors. Whether
            you are chasing sunsets on coastal highways or finding solace in
            remote mountain hideaways, our campers provide the ultimate escape.
            With meticulous craftsmanship and attention to detail, we ensure
            that every moment of your trip is filled with unparalleled comfort
            and convenience. Join us in redefining the way you explore the world
            - one road trip at a time.
          </p>
        </div>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
