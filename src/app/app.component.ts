import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diak';

  oszlopok:any;
  diak:any = [
    {name:"Béla", age:"31", eyeColor:"Barna"},
    {name:"Attila", age:"48", eyeColor:"Zöldes-Barna"}, 
    {name:"András", age:"41", eyeColor:"Kék"},
  ]
  constructor(private config: ConfigService) {
    this.oszlopok = config.getOszlopok();
   }
  torol(i:number, diak:any){
    // console.log(i)
    // this.diak.splice(i,1)
    this.diak =this.diak.filter(
      function(e:any){
       return e != diak;
      }
    )
  }
}
 