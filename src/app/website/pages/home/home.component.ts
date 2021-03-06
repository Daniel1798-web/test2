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
  reading:any = ""
  iden:any = {}
  characters2
  episodes2
  locations2
  textFilter = ""
  todo=[]
  todo2=[]
  bb = []


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
        this.characters2[i].locacion = 'character/'
        this.todo.push(this.characters2[i])
      }
      

    })

    this.apiservice.getAllEpisodes()
    .subscribe(data => {
      this.episodes = data
      this.episodes2 = this.episodes.results
      for(let i = 0; i < this.episodes2.length; i++){
        this.episodes2[i].locacion = 'episode/'
        this.episodes2[i].image ='../../../assets/svg/imagesEpisode.jpg'
        this.todo.push(this.episodes2[i])
      }
    })

    this.apiservice.getAllLocations()
    .subscribe(data => {
      this.locations = data
      this.locations2 = this.locations.results

      for(let i = 0; i < this.locations2.length; i++){
        this.locations2[i].locacion ='location/'
        this.locations2[i].image = '../../../../assets/svg/mundos.jpg'
        this.todo.push(this.locations2[i])
      }
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
    this.episode = false
    this.location = false
    this.character = false
    
  }

  closeSearching(a:boolean){
    this.searchingPanel = a
    this.character = true
  }

  readSearching(){
    for(let i = 0; i < 60 ; i++){
      this.textFilter = this.todo[i].name.replace(/ /g, "").toLowerCase()
      return console.log(this.todo[i].name.replace(/ /g, "").toLowerCase())
      }
    

     
  }

  filtrar(f){
    var te = []
    
    te = this.todo

    this.reading = f
    
    console.log(this.reading)


    
    /*for(let i = 0; i < 60 ; i++){
      for(let l = 0; l < this.reading.length; l++){
        this.bb.push( te[i].name.toLowerCase().split(''))

        if(this.bb[l] === this.reading[l]){
          console.log(this.bb + " si se??or" )

        }else{
          this.bb.length = 0
        }

       }

      }
    
      
      if(this.reading === this.reading){
        //this.todo2.push(te[i])
       return console.log("conseguido")
      
      }else{
        return console.log("error")
      }
      /*if(this.todo[i].name.replace(/ /g, "").toLowerCase().split('')  === this.reading){
        this.todo2.push(this.todo[i])

        return console.log(this.todo2[i].name)

      }*/
      /*if(this.reading.length === 0){
        this.todo2.length = 0
      }*/
     
     // console.log(this.todo[i].name.replace(/ /g, "").toLowerCase())*/
      }

  
    
  

}
