import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  constructor(private vehiculoService:VehiculoService){}

  public mostrarImagen = false;
  public listaVehiculos:Array<Vehiculo> = [];
  private _filtro: string = "";

  get filtro (){
    return this._filtro;
  }
  set filtro (data:string){
    this._filtro = data;
  }

  // @Input() valor:string = '';

  ngOnInit() {
    this.consultaVehiculos();
  }
  consultaVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(respuesta =>{
      this.listaVehiculos = respuesta;
    })
  }

  eliminar (codigo:string){
    Swal.fire({
      title:"¿Desea eliminar el registro?",
      showCancelButton:true,
      confirmButtonText:"Si",
      cancelButtonText:"No",
      icon:"question"
    }).then((res) =>{
      if (res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data => {
          if(data.codigo == '1'){
            this.consultaVehiculos();
            Swal.fire ({
              title:"Mensaje",
              text: "Vehiculo eliminado con éxito.",
              icon: "success"
            })
          }
        })
      }
    })
  }
  //FUNCIONES
  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }
  
  recepcion(dato:number){
    console.log("Dato: ", dato);
  }
 
}
