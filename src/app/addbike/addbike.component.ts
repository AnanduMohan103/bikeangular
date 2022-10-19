import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {

  constructor() { }
  name=""
  brand=""
  colour=""
  price=""

  readValues=()=>{
    let data={
      "name":this.name,
      "brand":this.brand,
      "colour":this.colour,
      "price":this.price
    }
  }
  ngOnInit(): void {
  }

}
