import React, { Component } from 'react';
import AlbumCard from '../components/AlbumCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      isLoading: false,
      searchDone: false,
      albumsFetched: [],
      lastSearch: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    this.setState({
      isLoading: true,
    });
    const { searchTerm } = this.state;
    const result = await searchAlbumsAPI(searchTerm);

    this.setState({
      searchTerm: '',
      isLoading: false,
      searchDone: true,
      albumsFetched: result,
      lastSearch: searchTerm,
    });
  }

  renderAlbums = () => {
    const { albumsFetched, lastSearch } = this.state;

    if (albumsFetched.length === 0) {
      return (
        <>
          <h3>{`Resultado de álbuns de: ${lastSearch}`}</h3>
          <h2>Nenhum álbum foi encontrado</h2>
        </>
      );
    }

    return (
      <>
        <h3>{`Resultado de álbuns de: ${lastSearch}`}</h3>
        <section>
          { albumsFetched.map((album) => (
            <AlbumCard
              key={ album.collectionId }
              artistName={ lastSearch }
              album={ album }
            />
          )) }
        </section>
      </>
    );
  }

  render() {
    const { searchTerm, isLoading, searchDone } = this.state;
    const minimumLength = 2;

    return (
      <div data-testid="page-search">
        <Header />
        <h1>Search</h1>
        <input
          type="text"
          name="searchTerm"
          placeholder="Nome do Artista"
          value={ searchTerm }
          onChange={ this.handleChange }
          data-testid="search-artist-input"
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ searchTerm.length < minimumLength }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
        { isLoading && <Loading /> }
        { searchDone && this.renderAlbums() }
      </div>
    );
  }
}

export default Search;