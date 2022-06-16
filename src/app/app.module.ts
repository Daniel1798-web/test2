import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule} from "@ngrx/store"
import {miReducer} from "./app.reducer";
import { HomeComponent } from './website/pages/home/home.component';
import { CharacterComponent } from './website/pages/character/character.component';
import { HeaderComponent } from './website/componentes/header/header.component';
import { LayaoutComponent } from './website/componentes/layaout/layaout.component';
import { ErrorComponent } from './website/componentes/error/error.component';
import { EpisodeComponent } from './website/pages/episode/episode.component';
import { LocationComponent } from './website/pages/location/location.component';
import { FilterPipe } from './pipes/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    HeaderComponent,
    LayaoutComponent,
    ErrorComponent,
    EpisodeComponent,
    LocationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      mensaje : miReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
