import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers:[PeticionesService]
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches:Array<Coche>;
  public posts;

  constructor(
    private _peticionesService:PeticionesService
  ) {
    this.coche= new Coche("","","");
    this.coches=[
      new Coche("seat Panda","120","Blanco"),
      new Coche("seat leon","130","Rojo")
    ];
   }

  onSubmit(){
   this.coches.push(this.coche);
   this.coche= new Coche("","","");
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result=>{
        console.log(result)
        this.posts= result;
      },
      error=>{
        var erroMesage= <any>error;
        console.log(erroMesage)
      }
    );
  }

}
