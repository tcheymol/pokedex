import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PokeIndex} from '../poke-index/poke-index';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  nav;

  constructor(private navController: NavController) {
    this.nav = navController
  }

  goToPokeIndex() {
    this.nav.push(PokeIndex);
  }
}
