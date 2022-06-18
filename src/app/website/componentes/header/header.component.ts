import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ss=""

  activeSearch2 = true
  activeSearch = false
  character:boolean = false;
  location:boolean = false;
  episode:boolean = false;
  @Output() locations = new EventEmitter<boolean>()
  @Output() characters = new EventEmitter<boolean>()
  @Output() episodes = new EventEmitter<boolean>()
  @Output() searching = new EventEmitter<boolean>()
  @Output() write = new EventEmitter()


  ngOnInit(): void {
    //this.sendText()
  }

    show(){
      this.activeSearch2 = false
      this.activeSearch = !this.activeSearch
      this.searching.emit(this.activeSearch)

    }

    show2()
    {
      this.activeSearch2 = true
      this.activeSearch = false
      this.searching.emit(this.activeSearch)
    }
    

    showLocations(){
      this.location = !this.location
      this.locations.emit(this.location)
      this.character = false
      this.episode = false
      this.activeSearch = false
      this.activeSearch2 = true
      if(this.location = false){
        return   this.locations.emit(this.character)

      }
    }

    showCharacter(){
      this.character = !this.character
      this.characters.emit(this.character)
      this.location = false
      this.episode = false
      this.activeSearch = false
      this.activeSearch2 = true
      if(this.character = false){
        return   this.characters.emit(this.character)

      }
    }

    showEpisodes(){
      this.episode = !this.episode
      this.episodes.emit(this.episode)
      this.location = false
      this.character = false
      this.activeSearch = false
      this.activeSearch2 = true
      if(this.episode = false){
        return   this.episodes.emit(this.character)

      }    }


      sendText(){
        this.write.emit(this.ss)
        
      }
}
