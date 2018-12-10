import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import { HttpClientModule } from '@angular/common/http'; */
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
   public url="https://jsonplaceholder.typicode.com/posts";

   posts:any;
   constructor(private _http:HttpClient) {
      }
 
    getArticulos(){
      return this._http.get(this.url)


    
     
   }   





  getPrueba(){
    return 'Hola desde serv';
  }

}
