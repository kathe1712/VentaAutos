import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PageNotFoundComponent } from './paginas/PageNotFound/PageNotFound.component';
import { PagVehiculosComponent } from './paginas/PagVehiculos/PagVehiculos.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ClientesComponent } from './paginas/Clientes/Clientes.component';
import { EditarVehiculoComponent } from './paginas/EditarVehiculo/EditarVehiculo.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  
  {
    path: "vehiculo/nuevo",
    component: PagVehiculoRegistroComponent
  },
  {
    path: "vehiculo/:codigo",
    component: PagVehiculosComponent
  },
  {
    path: "vehiculo/:codigo/editar", 
    component: EditarVehiculoComponent
  },
  {
    path: "vehiculos",
    component: PagListaVehiculosComponent
  },
  {
    path: "clientes",
    component: ClientesComponent
  },
  {
    path: "",
    redirectTo: "/home", // Si la ruta está vacía, redirige a "/home"
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
