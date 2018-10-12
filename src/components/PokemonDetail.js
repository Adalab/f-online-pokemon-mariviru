import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/PokemonDetail.css';

class pokemonDetail extends Component {

  render() {
    const {
      match,
      pokeList,
      pokeEvolution,
    } = this.props;

    const detail = pokeList[match.params.id - 1]
    console.log('match', match)
    console.log('pokelist', pokeEvolution)
    return (
      <section className='pokemon__detail-container' >
        <div className='pokemon__detail-main' >
          <img
            className='pokemon__detail-image'
            src={detail.sprites.back_default}
            alt={detail.name}
          />
          <img
            className='pokemon__detail-image'
            src={detail.sprites.front_default}
            alt={detail.name}
          />
          <img
            className='pokemon__detail-image'
            src={detail.sprites.back_shiny}
            alt={detail.name}
          />
          <img
            className='pokemon__detail-image'
            src={detail.sprites.front_shiny}
            alt={detail.name}
          />
          <div
            className='pokemon__detail'>
            <h1 className='pokemon__detail-name' >
              {detail.name}
            </h1>
            <div
              className='pokemon__detail-data'>
              <p className='pokemon__detail-text' >
                Altura: {detail.height}
              </p>
              <p className='pokemon__detail-text' >
                Peso: {detail.weight}
              </p>
              <ul className="pokemon__detail-list">
                {detail.abilities.map(function (ability, index) {
                  return (
                    <li
                      className='data__types-type'
                      key={index}
                    >
                      {ability.ability.name}
                    </li>
                  )
                })}
              </ul>
              <ul className="pokemon__detail-list">
                <li className='data__types-type'>
                  {pokeEvolution[0].chain.evolves_to[0].species.name}
                </li>
                <li className='data__types-type'>
                  {pokeEvolution[0].chain.evolves_to[0].evolves_to[0].species.name}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to='/' className='pokemon__detail-link'>
          <button className='pokemon__detail-backbutton' >Volver</button>
        </Link>
      </section>
    );
  }
}

export default pokemonDetail;