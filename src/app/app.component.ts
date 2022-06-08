import {testState} from './app.reducer'
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';
  dato$: Observable<any>
  hola = "hola mundo"

  constructor(private  store : Store<testState> )
  {
  this.dato$ =  store.select('mensaje')
  }

  spanishMensaje(){
    this.store.dispatch({type : "SPANISH"})
  }

  englishMensaje(){
    this.store.dispatch({type : "ENGLISH"})

  }
}
