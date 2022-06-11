import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from './../../../service/api.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  cosa:any = {}
  b: any = {};
  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService
  ) {
    this.characterId


  }
  ngOnInit() {
    this.b = this.route.snapshot.params["id"]
     this.ApiService.getCharacter(this.b)
    .subscribe(data=>{
      this.cosa = data
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
