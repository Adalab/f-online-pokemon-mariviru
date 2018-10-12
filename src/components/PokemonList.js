import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import '../stylesheets/PokemonList.css';


class PokemonList extends Component {

  render() {
    const {
      pokeList,
      filterList,
      input,
      pokeSpecies,
    } = this.props;

    let listToShow;

    if (input === '') {
      listToShow = pokeList
    } else {
      listToShow = filterList
    }

    if (pokeList.length === 0) {
      return (
        <p className='loading'>Loading</p>
      )
    } else {
      return (
        <ul className='pokemon__list' >
          {listToShow.map((pokemon, index) =>
            <li
              className='pokemon__list-element'
              key={index}>
              <Link to={`/pokemondetail/${pokemon.id}`}>
                <PokemonCard
                  name={pokemon.name}
                  types={pokemon.types}
                  img={pokemon.sprites.front_default}
                  num={pokemon.id}
                  pokeSpecies={pokeSpecies}
                />
              </Link>
            </li>
          )}
        </ul>

      )
    }
  }
}

export default PokemonList;

PokemonList.propTypes = {
  pokeList: PropTypes.array,
  filterList: PropTypes.array,
  input: PropTypes.string,
};