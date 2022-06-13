import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  listOfLocations:object = []
  characters:any = []
  episodes:any = []
  locations:any = []
  cosa = "Alive";
  cosa2 = "Dead"
  cosa3 = "unknown"
  location = false;
  character = true
  episode = false;

  iden:any = {}

  @Output() cosita = new EventEmitter(this.iden)

  constructor( private apiservice : ApiService) {
    this.list = this.apiservice.getAllCharacters()
    this.listOfEpisodes = this.apiservice.getAllEpisodes()
    this.listOfLocations = this.apiservice.getAllLocations()
   }

  ngOnInit(): void {
    this.apiservice.getAllCharacters()
    .subscribe(data => {
      this.characters = data
    })

    this.apiservice.getAllEpisodes()
    .subscribe(data => {
      this.episodes = data
    })

    this.apiservice.getAllLocations()
    .subscribe(data => {
      this.locations = data
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

     this.apiservice.getCharacter(id)
     .subscribe(data=>{
      console.log("esta es la ", data)
    this.iden = data

     })
     this.cosita.emit(this.iden)

  }

}
