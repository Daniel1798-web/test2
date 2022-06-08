import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list:any=[];
  characters:any = []
  cosa = "Alive";
  cosa2 = "Dead"
  cosa3 = "unknown"
  constructor( private Apiservice : ApiService) {
    this.list = this.Apiservice.getAllProducts()
   }

  ngOnInit(): void {
    this.Apiservice.getAllProducts()
    .subscribe(data => {
      this.characters = data
    })
  }

}
