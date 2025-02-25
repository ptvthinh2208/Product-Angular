import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterVarComponent } from './footer-var/footer-var.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterVarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent,
    FooterVarComponent,
  ]
})
export class CoreModule { }
