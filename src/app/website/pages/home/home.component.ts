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
  searchingPanel = false
  things=[]
  reading = ""
  iden:any = {}
  character2

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
      this.character2 = this.characters.results
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
    this.searchingPanel = false
    
  }

  showCharactersHome(valor:boolean){
    this.character = valor
    this.location = false
    this.episode = false
    this.searchingPanel = false
  }

  
  showEpisodesHome(valor:boolean){
    this.episode = valor
    this.location = false
    this.character = false
    this.searchingPanel = false
    
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


  showSearching(a: boolean){
    this.searchingPanel = a
  }

  readSearching(a){
      this.reading = a
     
  }

  filtrar(f){
    this.reading = f
    this.character2.name
    return console.log("esto" + this.character2.name)

  }

 
}
