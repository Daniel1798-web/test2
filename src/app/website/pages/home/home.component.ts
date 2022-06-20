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
  characters2
  episodes2
  locations2
  textFilter = ""
  todo=[]
  todo2=[]
  arr = []

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
      this.characters2 = this.characters.results
      for(let i = 0; i < this.characters2.length; i++){
        this.todo.push(this.characters2[i])
      }
      

    })

    this.apiservice.getAllEpisodes()
    .subscribe(data => {
      this.episodes = data
      this.episodes2 = this.episodes.results
      for(let i = 0; i < this.episodes2.length; i++){
        this.todo.push(this.episodes2[i])
      }
    })

    this.apiservice.getAllLocations()
    .subscribe(data => {
      this.locations = data
      this.locations2 = this.locations.results
      for(let i = 0; i < this.locations2.length; i++){
        this.todo.push(this.locations2[i])
      }
    })
this.arr.push(this.todo)
    
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
    this.episode = false
    this.location = false
    this.character = false
    
  }

  readSearching(){
    for(let i = 0; i < 60 ; i++){
      this.textFilter = this.todo[i].name.replace(/ /g, "").toLowerCase()
      return console.log(this.todo[i].name.replace(/ /g, "").toLowerCase())
      }
    

     
  }

  filtrar(f){
    this.reading = f.toLowerCase().split('')
    console.log(this.reading)
    for(let i = 0; i < 60 ; i++){
     var te = []
      this.todo[i].name.toLowerCase().split('')
     console.log(te)

     te.push(this.todo[i])

      for(let e = 0; e < this.reading.length; e++){ 

      if(this.arr[0].name === this.reading[e]){
        this.todo2.push(this.arr[i])
       return console.log(this.arr[i] + " " + this.reading)
      
      }/*if(this.todo[i].name.replace(/ /g, "").toLowerCase().split('')  === this.reading){
        this.todo2.push(this.todo[i])

        return console.log(this.todo2[i].name)

      }*/
      /*if(this.reading.length === 0){
        this.todo2.length = 0
      }*/else{
        return console.log("error")
      }
     
     // console.log(this.todo[i].name.replace(/ /g, "").toLowerCase())
      }

  
    }
  }

 
}
