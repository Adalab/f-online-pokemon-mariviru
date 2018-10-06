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
      <form className="Form">
        <label
          htmlFor="buscador"
          className='Form__title'>
          Pokemon
          </label>
        <input
          onChange={handleInput}
          id="buscador"
          type="text"
          value={inputState}
          placeholder='Busca a tu pokemon favorito'
          className='Form__input'
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