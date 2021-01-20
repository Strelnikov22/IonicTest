import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAddPageRoutingModule } from './home-add-routing.module';

import { HomeAddPage } from './home-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAddPageRoutingModule
  ],
  declarations: [HomeAddPage]
})
export class HomeAddPageModule {}
