import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterVarComponent } from './footer-var/footer-var.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterVarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    FooterVarComponent,
  ]
})
export class CoreModule { }
