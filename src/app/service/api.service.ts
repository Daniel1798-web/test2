import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private AppiUrl:"https://rickandmortyapi.com/api/character";



  constructor(private http: HttpClient ){ }

  getAllCharacters(){
    return this.http.get<Character[]>("https://rickandmortyapi.com/api/character")
  }

  getAllEpisodes(){
    return this.http.get("https://rickandmortyapi.com/api/episode")
  }

  getCharacter(id:string){
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
