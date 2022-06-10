import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../service/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  solo:any = {}
  list:object=[];
  listOfEpisodes:object=[]
  characters:any = []
  episodes:any = []
  cosa = "Alive";
  cosa2 = "Dead"
  cosa3 = "unknown"
  location = false;
  character = true
  episode = false;
  constructor( private Apiservice : ApiService) {
    this.list = this.Apiservice.getAllCharacters()
    this.listOfEpisodes = this.Apiservice.getAllEpisodes()
   }

  ngOnInit(): void {
    this.Apiservice.getAllCharacters()
    .subscribe(data => {
      this.characters = data
    })

    this.Apiservice.getAllEpisodes()
    .subscribe(data => {
      this.episodes = data
    })
  }

  showLocationsHome(valor:boolean){
    this.location= valor;
    this.character = false
    this.episode = false
  }

  showCharactersHome(valor:boolean){
    this.character = valor
    this.location = false
    this.episode = false
  }

  
  showEpisodesHome(valor:boolean){
    this.episode = valor
    this.location = false
    this.character = false
  }

  mostrarId(){
    console.log("hola", this.solo.id);
   
  }

  onShowCharacterDetail(id:string){
     this.Apiservice.getCharacter(id)
     .subscribe(data=>{
      console.log("esta es la ", data)
     })

  }

}
