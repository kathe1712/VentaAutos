import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./pipes/AEspacio.pipe";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        AEspacioPipe,
        CalificacionComponent
    ],
    exports:[
        AEspacioPipe,
        CalificacionComponent
    ]
})
export class UtilitariosModule{

}