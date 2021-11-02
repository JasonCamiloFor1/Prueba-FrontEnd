import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../../servicios/proyectos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  proyectos:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _proyectosService: ProyectosService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.proyectos = this._proyectosService.buscarProyectos( params['termino'] );
      console.log( this.proyectos );
    });

  }

}
