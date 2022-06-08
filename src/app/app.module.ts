import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule} from "@ngrx/store"
import{miReducer} from "./app.reducer";
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    StoreModule.forRoot({
      mensaje : miReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
