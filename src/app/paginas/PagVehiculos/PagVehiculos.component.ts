import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagVehiculos',
  templateUrl: './PagVehiculos.component.html',
  styleUrls: ['./PagVehiculos.component.css']
})
export class PagVehiculosComponent implements OnInit {

  vehiculo?:Vehiculo;
  constructor(
    private activatedroute: ActivatedRoute,
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params =>{
    //   this.vehiculoService.getVehiculo(params['codigo']).subscribe (data =>{
    //     //this.vehiculo = data;
    //   })
    // } );


     this.activatedroute.params.subscribe(params => {
      this.vehiculoServicio.getVehiculo(params['codigo']).subscribe(data => {
        if (data.codigo == '1') {
          this.vehiculo = data.data;
          
        }
        else {
          Swal.fire({
            title: "Mensaje de Alerta",
            text: "No se pudo cargar la información",
            icon: "error"
          })
        }
      })
    })
  }

  
  imprimir(data:any){
    console.log("Calificación: ", data);
  }

}
