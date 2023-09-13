import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType: string = "XPTO PS4"


  @Input()
  gamePrice: string = "R$ 467,80" 

    constructor(){

    }

    ngOnInit(): void {
      
    }

}
