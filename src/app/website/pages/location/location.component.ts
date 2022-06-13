import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

  idLocation:string="";
  location

  ngOnInit(): void {
    this.idLocation = this.route.snapshot.params["id"]
    this.apiService.getOneLocation(this.idLocation)
    .subscribe(data=>{
      this.location = data
    })
  }

}
