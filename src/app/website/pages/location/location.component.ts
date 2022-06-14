import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

    solo = []

  idLocation:string="";
  location
  cosa = "Alive";
  cosa2 = "Dead"
  cosa3 = "unknown"
  idCharacter:string =""
  character:any=[]
  character2:any=[]

  ngOnInit(): void {
    this.idLocation = this.route.snapshot.params["id"]
    this.apiService.getOneLocation(this.idLocation)
    .subscribe(data=>{
      this.location = data
      this.solo = this.location.residents

     // console.log(this.location.residents)
    })

    this.apiService.getAllCharacters()
    .subscribe(data=>{
      this.character = data
      
    })
    this.fors()

  }


  fors(){
    for(let i:any = 0; i < this.solo.length; i++){
      i = this.solo
      console.log(i)
      }
    }

  }


