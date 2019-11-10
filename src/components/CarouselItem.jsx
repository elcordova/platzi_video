import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = ({ id, cover, title, year, contentRating, duration, setFavorite, deleteFavorite, isList }) => {
  const handleSetFavorite = () => {
    setFavorite({ id, cover, title, year, contentRating, duration });
  };
  const handleDeleteFavorite = () => {
    deleteFavorite(id);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
          {
            isList ? (
              <img
                className='carousel-item__details--img'
                src={removeIcon}
                alt='trash Icon'
                onClick={handleDeleteFavorite}
              />
            ) :
              (
                <img
                  className='carousel-item__details--img'
                  src={plusIcon}
                  alt='Plus Icon'
                  onClick={handleSetFavorite}
                />
              )
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {
            `${year} ${contentRating} ${duration}`
          }
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispacheToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispacheToProps)(CarouselItem);
