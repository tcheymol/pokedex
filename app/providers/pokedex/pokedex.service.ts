import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PokedexService {

  constructor(private http: Http) {}

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1000';

  fetchAllPokemons() {
    return this.http
      .get(this.allPokemonsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
      ;
  }

  fetchPokemon(name) {
    const fetchPokemonUrl = this.pokemonUrl + name + '/';
    return this.http
      .get(fetchPokemonUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
      ;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
