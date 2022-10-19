import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbike',
  templateUrl: './viewbike.component.html',
  styleUrls: ['./viewbike.component.css']
})
export class ViewbikeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.bikeData=data
      }
    )
  }

bikeData:any=[]
  ngOnInit(): void {
  }

}
