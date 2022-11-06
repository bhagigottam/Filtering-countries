import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectone';

  cities=[{city:"hyderabad"},{city:"bangalore"},{city:"mumbai"},{city:"kolkata"} ,{city:"guntur"} ,{city:"chennai"},{city:"hydssss"}  ]
filteredcities=[...this.cities];

  search:any;
  searchin(eve:any){
    console.log(eve);
    if(this.search==""){
 this.filteredcities=[...this.cities]
 return;
    }
    this.filteredcities=this.filteredcities.filter((k:any)=>{
      if(k.city.includes(this.search)){
        return k
      }
    })

  }

  something:any;
  searchfilter(kus:any){
    console.log(kus);
    if(this.something==""){
      this.filteredcities=[...this.cities]
      
    }
    else if(kus.key=="Backspace"){
      this.filteredcities=this.filteredcities.filter((val:any)=>{
        console.log(val)
        if(val.city.includes(this.something)){
          return val
        }
      })
      
    }
   else{ this.filteredcities=this.filteredcities.filter((val:any)=>{
      console.log(val)
      if(val.city.includes(this.something)){
        return val
      }
    })
    
  }
}
}
