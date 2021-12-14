import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const {
      music: { trackName, previewUrl, trackId },
      checked,
      handleFavorite,
    } = this.props;

    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label
          htmlFor={ trackId }
          data-testid={ `checkbox-music-${trackId}` }
        >
          <input
            type="checkbox"
            name={ trackName }
            id={ trackId }
            checked={ checked }
            onChange={ handleFavorite }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  music: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default MusicCard;