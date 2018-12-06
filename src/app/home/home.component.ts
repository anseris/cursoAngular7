import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RopaService]
})
export class HomeComponent implements OnInit {
  public titulo: string='Pagina Principal';
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  public fecha;

  constructor(
    private _ropaService:RopaService
  ) { 
    this.fecha= new Date();
  }

  ngOnInit() {
    this.listado_ropa= this._ropaService.getRopa();
    console.log(this.listado_ropa)
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar="";
  }

  eliminarPrenda(i){
    this._ropaService.deleteRopa(i);
  }

}
