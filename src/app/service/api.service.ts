import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Character, Episode, Location } from '../models/character.model';

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
    return this.http.get<Episode>("https://rickandmortyapi.com/api/episode")
  }

  getAllLocations(){
    return this.http.get<Location>("https://rickandmortyapi.com/api/location")

  }

  getOneEpisode(id: string){
    return this.http.get<Episode>(`https://rickandmortyapi.com/api/episode/${id}`)
  }

  getCharacter(id:string){
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }

  getOneLocation(id: string){
    return this.http.get<Location>(`https://rickandmortyapi.com/api/location/${id}`)
  }
}
