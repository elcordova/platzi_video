import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = ({ history, match, playing, getVideoSource }) => {
  const { id } = match.params;
  const [loading, changeLoading] = useState(true);
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    getVideoSource(id);
    changeLoading(false);
  }, []);
  return loading ? (<p>...loading</p>) : hasPlaying ?
    (
      <div className='Player'>
        <video controls autoPlay>
          <source src={playing.source} type='video/mp4' />
        </video>
        <div className='Player-back'>
          <button
            type='button'
            onClick={history.goBack}
          >
          Regresar
          </button>
        </div>
      </div>
    ) : <NotFound />;
};

const mapStateToProps = ({ playing }) => {
  return {
    playing,
  };
};

const mapActionsToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapActionsToProps)(Player);
