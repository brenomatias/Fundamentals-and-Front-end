 
import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      fetchedFavorites: false,
      favoriteSongsList: [],
    };
  }

  componentDidMount() {
    this.fetchFavoritesSongs();
  }

  fetchFavoritesSongs = async () => {
    this.setState({
      isLoading: true,
    });
    const favoriteSongsList = await getFavoriteSongs();
    this.setState({
      isLoading: false,
      fetchedFavorites: true,
      favoriteSongsList,
    });
  }

  handleFavorite = (music) => {
    removeSong(music);
    this.fetchFavoritesSongs();
  }

  renderFavoriteSongsList = () => {
    const { favoriteSongsList } = this.state;

    return (
      <section>
        { favoriteSongsList.map((song) => (
          <MusicCard
            key={ song.trackId }
            music={ song }
            checked={ favoriteSongsList.includes(song) }
            handleFavorite={ () => this.handleFavorite(song) }
          />))}
      </section>
    );
  }

  render() {
    const { isLoading, fetchedFavorites } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites Songs</h1>
        { isLoading && <Loading /> }
        { fetchedFavorites && this.renderFavoriteSongsList() }
      </div>
    );
  }
}

export default Favorites;