import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PokeapiServiceService } from 'src/app/services/pokeapi-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pokemons:any = [];

  //
  constructor(public api:PokeapiServiceService, public firestore:AngularFirestore) {
    this.api.pokemonList$.subscribe(data => {
      this.pokemons = data;
    })
    
   }  

  ngOnInit(): void {
    
    
  }

  
}
