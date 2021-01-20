import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Place } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  places = []
  place: Place;

  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.places = this.homeService.getPlaces()
    console.log(this.homeService.getPlaces());

    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId = paramMap.get('placeId');
       
      this.place = this.homeService.getPlace(recipeId);
      //
      
      // console.log(this.places);
    })
  }


  ionViewWillEnter(){
    this.places = this.homeService.getPlaces();
    
  }

  onDeletePlace(){
    console.log(this.homeService.deletePlace(this.place.id))
    this.homeService.deletePlace(this.place.id); 
  }

  addNewPlace(){
    this.router.navigate(['/book']);
  }

}
