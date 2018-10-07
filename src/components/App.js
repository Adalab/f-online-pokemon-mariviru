import React, { Component } from 'react';
import Filter from './Filter';
import PokemonList from './PokemonList';
import '../stylesheets/App.css';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      filterList: [],
      input: '',
    }

    this.fetchPokemonList = this.fetchPokemonList.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterCharactersList = this.filterCharactersList.bind(this);
  }

  componentDidMount() {
    this.fetchPokemonList();
  }

  fetchPokemonList() {
    const pokeArrayData =[];
    for(let i = 1; i < 26; i++) {
      fetch(URL + i + '/')
      .then(response => response.json())
      .then(data => {
        pokeArrayData.push(data);
        this.setState({
          pokeList: pokeArrayData
        })
        //console.log('pokeList',this.state.pokeList)
      })
      .catch(error => {
        console.log('Hubo un problema con la petición: ' + error.message)
    })
    }
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    }, this.filterCharactersList)
  }

  filterCharactersList() {
    const input = this.state.input;
    const pokeList = this.state.pokeList;
    const filteredByName = pokeList.filter((character) =>
      character.name.toLowerCase().includes(input.toLowerCase())
    )
    this.setState({
      filterList: filteredByName,
    })
  }

  render() {
    //console.log('results', this.state.pokeList)
    const {
      pokeList,
      filterList,
      input,
    } = this.state;

    return (
      <main>
        <Filter
          handleInput={this.handleInput}
          inputState={input}
        />
        <PokemonList
          pokeList={pokeList}
          filterList={filterList}
          input={input}
        />
      </main>
    );
  }
}

export default App;
