import Modal from 'react-modal';
import { icons } from '../../assets';
import css from './ModalShowMore.module.css';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Features from '../Features/Features';
Modal.setAppElement('#root');
const ModalShowMore = ({ modalIsOpen, closeModal, car }) => {
  const { name, rating, reviews, location, price, gallery, description } = car;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      outline: 'transparent',
    },
    overlay: {
      backgroundColor: 'rgba(17, 18, 19, 0.4)',
      overflow: 'hidden',
    },
  };

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  console.log(activeTab);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className={css.modal}
        contentLabel="Example Modal"
      >
        <div className={css.content_wrapper}>
          <button className={css.btn_close} onClick={closeModal}>
            <svg className={css.svg_close} width={32} height={32}>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
          <h3 className={css.title}>{name}</h3>
          <div className={css.rating_wrapper}>
            <svg width={16} height={16} className={css.svg_star}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            <span
              className={css.rating_text}
            >{`${rating}(${reviews.length} Reviews)`}</span>
            <div className={css.location_wrapper}>
              <svg width={16} height={16} className={css.svg_location}>
                <use href={`${icons}#icon-map-pin`}></use>
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <p className={css.price}>&#8364;{price}</p>
          <div className={css.wrapper_scroll}>
            <ul className={css.img_list}>
              {gallery.map((img) => (
                <li className={css.img_item} key={nanoid()}>
                  <img src={img} alt="car-photo" />
                </li>
              ))}
            </ul>
            <p className={css.description}>{description}</p>
            <div className={css.tab_wrapper}>
              <button
                onClick={() => handleTabClick(1)}
                className={classNames(
                  css.tabs,
                  activeTab === 1 ? css.active_tab : ''
                )}
              >
                Features
              </button>
              <button
                onClick={() => handleTabClick(2)}
                className={classNames(
                  css.tabs,
                  activeTab === 2 ? css.active_tab : ''
                )}
              >
                Reviews
              </button>
            </div>
            {activeTab === 1 && <Features car={car} />}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalShowMore;
