import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiServiceService {
 private pokemonList = new BehaviorSubject({})
 pokemonList$ = this.pokemonList.asObservable()

  constructor() { 
    this.getData()
  }

async getData(){
    let fetchData = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10').then((response)=> response.json()).then((data)=>{this.pokemonList.next(data.results), console.log(data)
  })
   
  }
}