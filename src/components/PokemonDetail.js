import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/PokemonDetail.css';

class PokemonDetail extends Component {

  render() {
    const {
      match,
      pokeList,
      pokeEvolution,
    } = this.props;

    const detail = pokeList[match.params.id - 1]

    return (
      <section className='pokemon__detail-container' >
        <div className='pokemon__detail-main' >
          <div className="pokemon__detail-image">
            <img
              src={detail.sprites.back_default}
              alt={detail.name}
            />
            <img
              src={detail.sprites.front_default}
              alt={detail.name}
            />
            <img
              src={detail.sprites.back_shiny}
              alt={detail.name}
            />
            <img
              src={detail.sprites.front_shiny}
              alt={detail.name}
            />
          </div>
          <h1 className='pokemon__detail-name' >
            {detail.name}
          </h1>
          <div className='pokemon__detail-data'>
            <div className='data__description'>
              <p className='description-text' >
                Altura: {detail.height}
              </p>
              <p className='description-text' >
                Peso: {detail.weight}
              </p>
            </div>
            <h2 className="description-tittle">
              Habilidades
            </h2>
            <ul className="description-list-abilities">
              {detail.abilities.map(function (ability, index) {
                return (
                  <li
                    className='description-item-abilities'
                    key={index}
                  >
                    {ability.ability.name}
                  </li>
                )
              })}
            </ul>
            <h2 className="description-tittle">
              Evolución
            </h2>
            <ul className="description-list-evolution">
              <li className='description-item-evolution'>
                Evoluciona a: {pokeEvolution[0].chain.evolves_to[0].species.name}
              </li>
              <li className='description-item-evolution'>
                {pokeEvolution[0].chain.evolves_to[0].species.name} evoluciona a: {pokeEvolution[0].chain.evolves_to[0].evolves_to[0].species.name}
              </li>
            </ul>
          </div>
        </div>
        <Link to='/' className='pokemon__detail-link'>
          <button className='pokemon__detail-backbutton' >Volver</button>
        </Link>
      </section>
    );
  }
}

export default PokemonDetail;

PokemonDetail.propTypes = {
  match: PropTypes.object,
  pokeList: PropTypes.array,
  pokeEvolution: PropTypes.array,
};