import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public titulo = 'titulo del componente empleado';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  //public color:string;

  constructor() {
    this.empleado = new Empleado('Ana Gomez', 33, 'Camarera', true);
    this.trabajadores=[
      new Empleado('Daviz Lopez', 25, 'Cocinero', true),
      new Empleado('Jose Ruiz', 27, 'Administrativo', true),
      new Empleado('Eva Gomez', 31, 'Informatico', false),
      new Empleado('Gemma llul', 42, 'Cocinero', true), 
      new Empleado('Jose Ruiz', 27, 'Administrativo', true),
    ];

    this.trabajador_externo=true;
    //this.color= 'red';
   }

  ngOnInit() {
    console.log(this.trabajadores);
    console.log(this.empleado);
  }

  cambiarExterno(){
    this.trabajador_externo=!this.trabajador_externo;
    
  }

}
