import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import '../stylesheets/PokemonList.css';

class PokemonList extends Component {
  render() {
    const {
      pokeList,
      filterList,
    } = this.props;

    let listToShow;

		if (filterList.length === 0) {
			listToShow = pokeList
		} else {
			listToShow = filterList
		}
    console.log('lista', listToShow)
    if(pokeList.length === 0) {
      return (
        <p>Loading</p>
      )
    } else {
      return(
        <ul className='Character__list' >
				{listToShow.sort((a, b) => a.id - b.id).map(function (pokemon, index) {
					return (
						<li key={index}>
								<PokemonCard
                  name={pokemon.name}
                  types={pokemon.types}
                  img={pokemon.sprites.front_default}
                  num={pokemon.id}
								/>
						</li>
					)
				})}
			</ul>

        )
    }
  }
}
 
export default PokemonList;

PokemonList.propTypes = {
  pokeList: PropTypes.array,
  filterList: PropTypes.array,
};