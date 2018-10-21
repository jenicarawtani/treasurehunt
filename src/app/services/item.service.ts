import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
     {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Red",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    },
    {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Blue",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    },
    {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Green",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    },
    {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Orange",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    }
  ]

  teams: Array<any> = [
     {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Red",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    },
    {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Blue",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    },
    {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Green",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    },
    {
      "_id": "b2d9fa6b59cb9ca945417c2757ac74bb",
      "_rev": "1-db0adc3b7f4c045821c8d3da3d263bac",
      "team_name": "Team Orange",
      "members": [
        {
          "name": "Red",
          "email": "Red"
        }
      ]
    }
  ]

  constructor() { }

  createItem(title, description){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  getTeams(){
    return this.items;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }


}
