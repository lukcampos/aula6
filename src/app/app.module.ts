import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ListComponent,
   UserComponent,
   ImageComponent,
   ListItemComponent
 } from './components/index'; //importar todos os componets

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 // modulo que faz chamas http/https

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserComponent,
    ImageComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule // import o modulo de http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
