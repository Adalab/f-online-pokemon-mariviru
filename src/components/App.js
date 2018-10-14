import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filter from './Filter';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import '../stylesheets/App.css';

const URL = 'https://pokeapi.co/api/v2/pokemon/';
const URLSPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';
const URLEVOLUTIONCHAIN = 'https://pokeapi.co/api/v2/evolution-chain/';
const POKENUM = 26;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      filterList: [],
      pokeSpecies: [],
      pokeEvolution: [],
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
    const pokeArrayData = [];
    const pokeSpeciesData = [];
    const pokeEvolutionData = [];
    for (let i = 1; i < POKENUM; i++) {
      fetch(URL + i + '/')
        .then(response => response.json())
        .then(data => {
          pokeArrayData.push(data);
          this.setState({
            pokeList: pokeArrayData.sort((a, b) => a.id - b.id),
          })
          return fetch(URLSPECIES + i + '/')
        })
        .then(species => species.json())
        .then(data_species => {
          pokeSpeciesData.push(data_species);
          this.setState({
            pokeSpecies: pokeSpeciesData.sort((a, b) => a.id - b.id),
          })
          console.log('pokeSpeciesData', pokeSpeciesData)
           return fetch(URLEVOLUTIONCHAIN + i + '/')
        })
        .then(evolution => evolution.json())
        .then(data_evolution => {
          pokeEvolutionData.push(data_evolution);
          this.setState({
            pokeEvolution: pokeEvolutionData.sort((a, b) => a.id - b.id),
          })
          console.log('pokeEvolutionData', pokeEvolutionData)
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
    const {
      pokeList,
      filterList,
      pokeSpecies,
      pokeEvolution,
      input,
    } = this.state;

    return (

      <Switch>
        <Route
          exact path='/'
          render={props =>
            <main>
              <Filter
                handleInput={this.handleInput}
                inputState={input}
              />
              <PokemonList
                match={props.match}
                pokeList={pokeList}
                filterList={filterList}
                input={input}
                pokeSpecies={pokeSpecies}
              />
            </main>
          }
        />
        <Route
          extact path='/pokemondetail/:id'
          render={props =>
            <PokemonDetail
              match={props.match}
              pokeList={pokeList}
              pokeEvolution={pokeEvolution}
            />
          }
        />
      </Switch>
    );
  }
}

export default App;
