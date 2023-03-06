import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemonDataRaw:any;
  pokemonDetails:any;
  loaded:boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.getData()
    } 
    
    async getData(){
      let response = await fetch(this.pokemonDataRaw['url'])
      let json = await response.json().then((json)=>{
        this.pokemonDetails = json;
        this.loaded = true;
      })

      console.log(this.pokemonDetails)
    }
}
