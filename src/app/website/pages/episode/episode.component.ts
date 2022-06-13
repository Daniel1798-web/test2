import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, Episode } from 'src/app/models/character.model';
import {ApiService} from './../../../service/api.service'

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ){ }
  identificacion:string = ""
  episode:Episode
  rutaYoutube:string = "https://www.youtube.com/watch?v=dK3fVf5U8DM"


  ngOnInit(): void {
    this.identificacion = this.route.snapshot.params["id"]
    this.apiService.getOneEpisode(this.identificacion)
    .subscribe(data=>{
      this.episode = data
    })
  }

}
