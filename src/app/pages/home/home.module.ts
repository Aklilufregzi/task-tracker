import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';
import { LandingModule } from 'src/app/modules/landing/landing.module';
import { FooterModule } from 'src/app/modules/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    LandingModule,
    FooterModule
  ]
})
export class HomeModule { }
