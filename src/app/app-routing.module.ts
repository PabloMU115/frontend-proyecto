import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcuerdosComponent } from './prestamos/component/acuerdos/acuerdos.component';
import { AdmindocumentacionComponent } from './prestamos/component/admindocumentacion/admindocumentacion.component';
import { ArreglopagoComponent } from './prestamos/component/arreglopago/arreglopago.component';
import { CargosadministrativosComponent } from './prestamos/component/cargosadministrativos/cargosadministrativos.component';
import { CobrocuotaComponent } from './prestamos/component/cobrocuota/cobrocuota.component';
import { CobrodiferidoComponent } from './prestamos/component/cobrodiferido/cobrodiferido.component';
import { CobroformalizadoComponent } from './prestamos/component/cobroformalizado/cobroformalizado.component';
import { CobrojudComponent } from './prestamos/component/cobrojud/cobrojud.component';
import { ComprobantepagoComponent } from './prestamos/component/comprobantepago/comprobantepago.component';
import { CprestamoactivoComponent } from './prestamos/component/cprestamoactivo/cprestamoactivo.component';
import { CprestamocobrojudComponent } from './prestamos/component/cprestamocobrojud/cprestamocobrojud.component';
import { CprestamogarantiahipComponent } from './prestamos/component/cprestamogarantiahip/cprestamogarantiahip.component';
import { DepositosautomaticosComponent } from './prestamos/component/depositosautomaticos/depositosautomaticos.component';
import { DesembolsoautomaticoComponent } from './prestamos/component/desembolsoautomatico/desembolsoautomatico.component';
import { EmisionchequeComponent } from './prestamos/component/emisioncheque/emisioncheque.component';
import { InformesComponent } from './prestamos/component/informes/informes.component';
import { PolizasasociadasComponent } from './prestamos/component/polizasasociadas/polizasasociadas.component';
import { PrestamosaprobadosComponent } from './prestamos/component/prestamosaprobados/prestamosaprobados.component';
import { PrestamosdesaprobadosComponent } from './prestamos/component/prestamosdesaprobados/prestamosdesaprobados.component';
import { RegistrogarantiaComponent } from './prestamos/component/registrogarantia/registrogarantia.component';
import { RegistropolizaComponent } from './prestamos/component/registropoliza/registropoliza.component';
import { RprestamoactivoComponent } from './prestamos/component/rprestamoactivo/rprestamoactivo.component';
import { RprestamocobrojudComponent } from './prestamos/component/rprestamocobrojud/rprestamocobrojud.component';
import { RprestamogarantiahipComponent } from './prestamos/component/rprestamogarantiahip/rprestamogarantiahip.component';
import { TablapagoComponent } from './prestamos/component/tablapago/tablapago.component';

import { AgregarAsociadoComponent } from './sas/components/agregar-asociado/agregar-asociado.component';
import { ModificarAsociadoComponent } from './sas/components/modificar-asociado/modificar-asociado.component';
import { SasHomeComponent } from './sas/components/sas-home/sas-home.component';
import { ConsultarAsociadoComponent } from './sas/components/consultar-asociado/consultar-asociado.component';
import { EliminarAsociadoComponent } from './sas/components/eliminar-asociado/eliminar-asociado.component';


const routes: Routes = [
  {path: 'admindocumentacion', component:AdmindocumentacionComponent},
  {path: 'registropoliza', component:RegistropolizaComponent},
  {path: 'cargosadministrativos', component:CargosadministrativosComponent},
  {path: 'registrogarantia', component:RegistrogarantiaComponent},
  {path: 'depositosautomaticos', component:DepositosautomaticosComponent},
  {path: 'emisioncheque', component:EmisionchequeComponent},
  {path: 'tablapago', component:TablapagoComponent},
  {path: 'polizasasociadas', component:PolizasasociadasComponent},
  {path: 'prestamosaprobados', component:PrestamosaprobadosComponent},
  {path: 'prestamosdesaprobados', component:PrestamosdesaprobadosComponent},
  {path: 'arreglopago', component:ArreglopagoComponent},
  {path: 'acuerdos', component:AcuerdosComponent},
  {path: 'cobrojud', component:CobrojudComponent},
  {path: 'cprestamoactivo', component:CprestamoactivoComponent},
  {path: 'cprestamogarantiahip', component:CprestamogarantiahipComponent},
  {path: 'cprestamocobrojud', component:CprestamocobrojudComponent},
  {path: 'cobroformalizado', component:CobroformalizadoComponent},
  {path: 'cobrocuota', component:CobrocuotaComponent},
  {path: 'cobrodiferido', component:CobrodiferidoComponent},
  {path: 'informes', component:InformesComponent},
  {path: 'desembolsoautomatico', component:DesembolsoautomaticoComponent},
  {path: 'comprobantepago', component:ComprobantepagoComponent},
  {path: 'rprestamoactivo', component:RprestamoactivoComponent},
  {path: 'rprestamogarantiahip', component:RprestamogarantiahipComponent},
  {path: 'rprestamocobrojud', component:RprestamocobrojudComponent},
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
