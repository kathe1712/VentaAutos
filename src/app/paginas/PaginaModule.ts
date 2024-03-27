import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { PagVehiculosComponent } from "./PagVehiculos/PagVehiculos.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { ClientesComponent } from "./Clientes/Clientes.component";
import { EditarVehiculoComponent } from "./EditarVehiculo/EditarVehiculo.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations:[
        PagListaVehiculosComponent,
        PagVehiculosComponent,
        PagVehiculoRegistroComponent,
        ClientesComponent,
        EditarVehiculoComponent
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculosComponent,
        PagVehiculoRegistroComponent,
        ClientesComponent,
        EditarVehiculoComponent
    ]

})
export class PaginaModule{

}