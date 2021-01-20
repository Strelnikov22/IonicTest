import { Injectable } from '@angular/core';
import { Place } from './home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private places: Place[] = [
    {
      id:'1',
      ISBN:'111-000-111',
      Book:'Captains daughter',
      Author:'Pushkin A.S.',
      Publisher:'San Diego',
      Year:'1982'
    },
    {
      id:'2',
      ISBN:'111-000-333',
      Book:'Капитанская дочка',
      Author:'Пушкин А.С.',
      Publisher:'Москва',
      Year:'1835'
    },
  ]

  

  

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(ISBN: string, Book: string, Author: string, Publisher: string, Year: string) {
    this.places.push({
      ISBN,
      Book,
      Author,
      Publisher,
      Year,
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    });
  }

  

}
