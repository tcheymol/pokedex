import {Page, NavController, NavParams} from 'ionic-angular';
import {PokedexService} from '../../providers/pokedex/pokedex.service';
import { Pokemon } from '../pokemon/pokemon';

@Page({
  providers: [PokedexService],
  templateUrl: 'build/pages/poke-index/poke-index.html'
})

export class PokeIndex {
  allPokemons;
  pokemons: Array<JSON> = [];
  errorMessage;
  nav;
  searchQuery;

  constructor(private pokedexService: PokedexService, navController: NavController) {
    this.searchQuery = '';
    this.nav = navController
    this.fetchAllPokemons();
  };

  fetchAllPokemons() {
    this.pokedexService.fetchAllPokemons()
      .then(
        pokemons => this.initPokemonsList(pokemons.results),
        error =>  this.errorMessage = <any>error
    );
  }

  initPokemonsList(pokemons) {
    this.allPokemons = pokemons;
    this.pokemons = pokemons;
  }

  pokemonFilter(pokemon, filter) {
    return (pokemon.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

  filterPokemons(event) {
    let val = event.target.value;
    this.pokemons = this.allPokemons.filter((pokemon) => {
      return(this.pokemonFilter(pokemon, val))
    })
  }

  showPokemon(pokemon) {
    this.nav.push(Pokemon, {pokemon});
  }
}
