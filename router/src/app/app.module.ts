///<reference path="product/product.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ProductComponent} from "./product/product.component";
import { FailComponent } from './fail/fail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
