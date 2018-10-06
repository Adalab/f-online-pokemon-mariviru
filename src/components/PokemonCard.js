import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/PokemonList.css';

class PokemonCard extends Component {
  render() {
    const {
      name,
      img,
      types,
      num,
    } = this.props;
    return (
      <div>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <ul>{types.map(function (type, index) {
          return (
            <li
              key={index}
            >{type.type.name}</li>
          )
        })}
        </ul>
        <span>{num}</span>
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