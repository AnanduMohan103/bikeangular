import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  brand=""
  colour=""
  price=""

  readValue=()=>{
    let data={
      "name":this.name,
      "brand":this.brand,
      "colour":this.colour,
      "price":this.price
    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (response)=>{
        console.log("tests")
      }
    )
  }
  ngOnInit(): void {
  }

}
