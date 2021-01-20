import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.page.html',
  styleUrls: ['./home-add.page.scss'],
})
export class HomeAddPage implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(ISBN: HTMLInputElement, Book: HTMLInputElement, Author: HTMLInputElement, Publisher: HTMLInputElement, Year: HTMLInputElement){
    this.homeService.addPlace(ISBN.value, Book.value, Author.value, Publisher.value, Year.value);
    this.router.navigate(['/home']);
  }

}
