import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/PokemonCard.css';


class PokemonCard extends Component {

  render() {
    const {
      name,
      img,
      types,
      num,
      pokeSpecies,
    } = this.props;

    return (

      <div className='pokemon__card'>
        <div className="image__container">
          <img
            className='pokemon__card-image'
            src={img}
            alt={name}
          />
          <span className='pokemon__card-number'>ID/{num}</span>
        </div>
        <div className="pokemon__card-data">
          <h2 className="data__name">
            {name}
          </h2>
          <p className="data__evolve">
            Evolves from-->
            {pokeSpecies.map(function (specie) {
              if (specie.id === num) {
                return (
                  specie.evolves_from_species !== null ?
                  specie.evolves_from_species.name :
                  'none'
                )
              } else {
                return '';
              }
            }
            )}
          </p>
          <ul className="data__types">
            {types.map(function (type, index) {
              return (
                <li
                  className="data__types-type"
                  key={index}
                >
                  {type.type.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  types: PropTypes.array,
  num: PropTypes.number,
};