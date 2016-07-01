import {Page, NavController, NavParams} from 'ionic-angular';
import {PokedexService} from '../../providers/pokedex/pokedex.service';

@Page({
  providers: [PokedexService],
  templateUrl: 'build/pages/pokemon/pokemon.html'
})

export class Pokemon {
  pokemonName;
  pokemon;
  errorMessage;

  constructor(navParams: NavParams, private pokedexService: PokedexService) {
    this.pokemonName = navParams.get('pokemon');
    this.pokedexService.fetchPokemon(this.pokemonName)
      .then(
        pokemon => this.pokemon = pokemon,
        error =>  this.errorMessage = <any>error
      );
  }
}
