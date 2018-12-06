import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo:string='Pagina de contactos de la web'
  public parametro;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.parametro=params['id']
      console.log(this.parametro)
    })
  }

}
