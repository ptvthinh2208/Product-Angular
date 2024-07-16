import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterOutlet } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
