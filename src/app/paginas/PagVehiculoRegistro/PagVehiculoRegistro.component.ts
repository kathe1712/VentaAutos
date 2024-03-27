import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {
  vehiculo?:Vehiculo;
  formulario: FormGroup;

  constructor(
    private activatedroute: ActivatedRoute,
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio":['', [Validators.required]],
      "kilometraje": ['', [Validators.required]],
      "precio": [],
      "calificacion": ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }
  guardar() {
    if (this.formulario.valid){
      this.vehiculoServicio.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta => {
          if (respuesta.codigo == '1'){
            Swal.fire({
              title: "Mensaje",
              text: "¡Vehículo registrado con éxito!",
              icon: "success"
            }).then (res => {
              this.formulario.reset();
            });
          }
          else{
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar el vehículo: "+respuesta.mensaje,
              icon: "error"
            })
          }
        }
      );
    }
    else{
      Swal.fire({
        title:"Mensaje",
        text:"Faltan llenar campos",
        icon:"error"
      })
    }


    let vehiculo: Vehiculo = { ...this.formulario.value };

    if (this.formulario.valid){
      this.vehiculoServicio.addVehiculo(vehiculo);
      
    }
    else{
      Swal.fire({
        title: "Mensaje",
        text: "Te faltan campos por llenar",
        icon: "info"
      })
    }
   
  }

}
export function validadorCodigo ():ValidatorFn{
  return(control: AbstractControl):ValidationErrors|null =>{
    const codigoV = /^[A-Z]\d{4}$/;
    let value = control.value;
    if (codigoV.test(value)){
      return null;
    }
    return {'codigoValidate':true};
  }
}

export function validarCodigoComparativo (){
  return(formulario: FormGroup):ValidationErrors|null =>{
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if(valor === valor2){
      return null;
    }
    return {'codigocomparativo':true}
  }
}
