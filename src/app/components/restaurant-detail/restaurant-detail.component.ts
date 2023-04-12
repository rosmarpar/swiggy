import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  @Input() data: any;
  @Input() isLoading!:any;

  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine:any) {
    return cuisine.join(', ');
  }

}
