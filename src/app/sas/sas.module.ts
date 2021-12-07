import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SasNavbarComponent } from './components/sas-navbar/sas-navbar.component';
import { AgregarAsociadoComponent } from './components/agregar-asociado/agregar-asociado.component';
import { ModificarAsociadoComponent } from './components/modificar-asociado/modificar-asociado.component';
import { SasHomeComponent } from './components/sas-home/sas-home.component';
import { ConsultarAsociadoComponent } from './components/consultar-asociado/consultar-asociado.component';
import { EliminarAsociadoComponent } from './components/eliminar-asociado/eliminar-asociado.component';


@NgModule({
  declarations: [
    SasNavbarComponent,
    SasHomeComponent,
    AgregarAsociadoComponent,
    ModificarAsociadoComponent,
    ConsultarAsociadoComponent,
    EliminarAsociadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SasNavbarComponent
  ]
})
export class SasModule { }
