import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-EditarVehiculo',
  templateUrl: './EditarVehiculo.component.html',
  styleUrls: ['./EditarVehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  vehiculo?:Vehiculo;
  formulario: FormGroup;

  constructor(
    private activatedroute: ActivatedRoute,
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio":['', [Validators.required]],
      "kilometraje": ['', [Validators.required]],
      "precio": [],
      "calificacion": ['', [Validators.required]]
    });
     this.formulario.controls['codigo'].disable();
  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.vehiculoServicio.getVehiculo(params['codigo']).subscribe(data => {
        if (data.codigo == '1') {
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
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
  guardar() {
    if (this.formulario.valid){
      this.vehiculoServicio.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(
        data => {
          if (data.codigo == '1'){
            Swal.fire({
              title: "Mensaje",
              text: "¡Vehículo actualizado con éxito!",
              icon: "success"
            })
          } 
          else{
            Swal.fire({
              title: "Mensaje",
              text: "Faltan llenar campos",
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

