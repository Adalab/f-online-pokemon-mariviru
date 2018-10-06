import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Filter.css';

class Filter extends Component {
  render() {
    const {
      handleInput,
      inputState,
    } = this.props;

    return (
      <form className="form">
        <label
          htmlFor="buscador"
          className='form__title'>
          Buscador de Pokemons
          </label>
        <input
          onChange={handleInput}
          id="buscador"
          type="text"
          value={inputState}
          placeholder='Filtra pokemons por nombre...'
          className='form__input'
        />
      </form>
    );
  }
}

export default Filter;

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
};