import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './website/pages/home/home.component'
import {LayaoutComponent} from './website/componentes/layaout/layaout.component'
import {ErrorComponent} from './website/componentes/error/error.component'

import {CharacterComponent} from './website/pages/character/character.component'
import {EpisodeComponent} from './website/pages/episode/episode.component'
import {LocationComponent} from './website/pages/location/location.component'




/*{ 
  path: '',
  redirectTo:'/home', 
  component:HomeComponent
  },*/
const routes: Routes = [ 
  { 
  path: '',
  component:LayaoutComponent,
  children:[

    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },
    {
      path:'character/:id',
      component: CharacterComponent
    },
    {
      path:'episode/:id',
      component: EpisodeComponent
    },
  
    {
      path:'location/:id',
      component: LocationComponent
    },
  
  ]
  },
  

  {
    path:'**',
    component:ErrorComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
