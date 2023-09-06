import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private oszlopok:any=[{key:"name", text:"Név"},
  {"age", text:"Kor"},
   {"eyeColor",text:"Szemszín"},
 ]
  constructor() { }
  getOszlopok(){
    return this.oszlopok;
  }
}
