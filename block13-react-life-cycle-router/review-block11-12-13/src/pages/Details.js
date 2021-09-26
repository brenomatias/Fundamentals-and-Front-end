import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      cocktail: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const {
      match: { params: { id } },
    } = this.props;
    try {
      const fetchCocktail = await fetch(
        `https://www.thxecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      const fetchCocktailJson = await fetchCocktail.json();
      this.setState({
        cocktail: fetchCocktailJson.drinks[0],
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { cocktail } = this.state;
    return (
      <>
        <h1>{cocktail.strDrink}</h1>
        <img src={ cocktail.strDrinkThumb } alt={ cocktail.strDrink } />
        <p>{cocktail.strInstructions}</p>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;