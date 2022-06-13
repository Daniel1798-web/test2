import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Character } from 'src/app/models/character.model';
import { ApiService } from './../../../service/api.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character:Character
  b: string = "";
  cosa = "Alive";
  cosa2 = "Dead"
  cosa3 = "unknown"
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }
  ngOnInit() {
    this.b = this.route.snapshot.params["id"]
     this.apiService.getCharacter(this.b)
    .subscribe(data=>{
      this.character = data
    })

  }


  OnChanges() {

  }
  characterId(a: any) {
    return console.log("esto", a)
  }

  du() {
    console.log("go")
    this.characterId(this.b)
  }




}
