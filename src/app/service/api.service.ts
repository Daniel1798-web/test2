import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  getAllProducts(){
    return this.http.get("https://rickandmortyapi.com/api/character")
  }
}
