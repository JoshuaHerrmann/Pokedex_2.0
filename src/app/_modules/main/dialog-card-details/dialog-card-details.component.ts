import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-card-details',
  templateUrl: './dialog-card-details.component.html',
  styleUrls: ['./dialog-card-details.component.scss']
})
export class DialogCardDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  healthValue:any = 85;
  currentValue:any = 0;
  displayedValue:any;
  loadingBar(){ 
       let myInterval = setInterval(()=>{
        this.displayedValue = this.currentValue + '%'
        this.currentValue++
        if(this.currentValue == this.healthValue){clearInterval(myInterval)}
      },15)
}
}
