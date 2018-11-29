import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  public nombre_componente='Componente de fruta';
  public listado_frutas='Naranja, Manzana, Pera y Sandía';

  public nombre:string;
  public edad:number;
  public mayorEdad:boolean;
  public trabajos:Array<string>;

  constructor() { 
    this.nombre= 'Antonio Gomez';
    this.edad= 41;
    this.mayorEdad=true;
    this.trabajos= ['carpintero', 'albañil', 'informatico'];

    //Variables y alcance
    var uno= 8;
    var dos= 15;

  }


  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad(15);

    //Variables y alcance
    var uno= 8;
    var dos= 15;
    if(uno===8){
      let uno= 3;
      var dos=88;
      console.log("DENTRO DEL IF: "+uno+" "+dos);
    }
    console.log("FUERA DEL IF: "+uno+" "+dos);
  }

  cambiarNombre(){
    this.nombre= 'Luis Perez';
  }
  cambiarEdad(edad){
    this.edad= edad;
  }
}
