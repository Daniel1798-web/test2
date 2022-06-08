import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  getAllCharacters(){
    return this.http.get("https://rickandmortyapi.com/api/character")
  }

  getAllEpisodes(){
    return this.http.get("https://rickandmortyapi.com/api/episode")
  }
}
