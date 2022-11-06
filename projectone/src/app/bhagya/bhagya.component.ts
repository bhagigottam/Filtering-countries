import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhagya',
  templateUrl: './bhagya.component.html',
  styleUrls: ['./bhagya.component.css']
})
export class BhagyaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=false;
  showmodal=false;
  closeeeee(){
  this.show=!this.show;    
  }
  showmodals(){
this.showmodal=true;
  }
}
