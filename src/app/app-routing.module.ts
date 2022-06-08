import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {CharacterComponent} from './pages/character/character.component'
const routes: Routes = [ 
  { 
  path: '', 
  component:HomeComponent
  },
  {
    path:'character',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
