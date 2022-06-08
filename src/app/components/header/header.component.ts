import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  character:boolean = false;
  location:boolean = false;
  episode:boolean = false;
  @Output() locations = new EventEmitter<boolean>()
  @Output() characters = new EventEmitter<boolean>()
  @Output() episodes = new EventEmitter<boolean>()


  ngOnInit(): void {
  }

    showLocations(){
      this.location = !this.location
      this.locations.emit(this.location)
      this.character = false
      this.episode = false
    }

    showCharacter(){
      this.character = !this.character
      this.characters.emit(this.character)
      this.location = false
      this.episode = false
    }

    showEpisodes(){
      this.episode = !this.episode
      this.episodes.emit(this.episode)
      this.location = false
      this.character = false
    }
}
