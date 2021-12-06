import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAsociadoComponent } from './sas/components/agregar-asociado/agregar-asociado.component';
import { ModificarAsociadoComponent } from './sas/components/modificar-asociado/modificar-asociado.component';
import { SasHomeComponent } from './sas/components/sas-home/sas-home.component';
import { ConsultarAsociadoComponent } from './sas/components/consultar-asociado/consultar-asociado.component';
import { EliminarAsociadoComponent } from './sas/components/eliminar-asociado/eliminar-asociado.component';

const routes: Routes = [
  {path: 'sas/agregarAsociado', component: AgregarAsociadoComponent},
  {path: 'sas/modificarAsociado', component: ModificarAsociadoComponent},
  {path: 'sas/inicio', component: SasHomeComponent},
  {path: 'sas/consultarAsociado', component: ConsultarAsociadoComponent},
  {path: 'sas/eliminarAsociado', component: EliminarAsociadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
