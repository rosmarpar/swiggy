import { Restaurant } from './../../models/restaurant.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant!: Restaurant;

  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine:any) {
    return cuisine.join(', ');
  }

}
