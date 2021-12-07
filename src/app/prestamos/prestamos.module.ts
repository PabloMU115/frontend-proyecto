import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AdmindocumentacionComponent } from './component/admindocumentacion/admindocumentacion.component';
import { RegistropolizaComponent } from './component/registropoliza/registropoliza.component';
import { CargosadministrativosComponent } from './component/cargosadministrativos/cargosadministrativos.component';
import { RegistrogarantiaComponent } from './component/registrogarantia/registrogarantia.component';
import { DepositosautomaticosComponent } from './component/depositosautomaticos/depositosautomaticos.component';
import { EmisionchequeComponent } from './component/emisioncheque/emisioncheque.component';
import { TablapagoComponent } from './component/tablapago/tablapago.component';
import { PolizasasociadasComponent } from './component/polizasasociadas/polizasasociadas.component';
import { PrestamosaprobadosComponent } from './component/prestamosaprobados/prestamosaprobados.component';
import { PrestamosdesaprobadosComponent } from './component/prestamosdesaprobados/prestamosdesaprobados.component';
import { CprestamoactivoComponent } from './component/cprestamoactivo/cprestamoactivo.component';
import { CprestamogarantiahipComponent } from './component/cprestamogarantiahip/cprestamogarantiahip.component';
import { CprestamocobrojudComponent } from './component/cprestamocobrojud/cprestamocobrojud.component';
import { ArreglopagoComponent } from './component/arreglopago/arreglopago.component';
import { AcuerdosComponent } from './component/acuerdos/acuerdos.component';
import { CobrojudComponent } from './component/cobrojud/cobrojud.component';
import { CobroformalizadoComponent } from './component/cobroformalizado/cobroformalizado.component';
import { CobrocuotaComponent } from './component/cobrocuota/cobrocuota.component';
import { CobrodiferidoComponent } from './component/cobrodiferido/cobrodiferido.component';
import { InformesComponent } from './component/informes/informes.component';
import { DesembolsoautomaticoComponent } from './component/desembolsoautomatico/desembolsoautomatico.component';
import { ComprobantepagoComponent } from './component/comprobantepago/comprobantepago.component';
import { RprestamoactivoComponent } from './component/rprestamoactivo/rprestamoactivo.component';
import { RprestamogarantiahipComponent } from './component/rprestamogarantiahip/rprestamogarantiahip.component';
import { RprestamocobrojudComponent } from './component/rprestamocobrojud/rprestamocobrojud.component';

@NgModule({
  declarations: [
    AdmindocumentacionComponent,
    RegistropolizaComponent,
    CargosadministrativosComponent,
    RegistrogarantiaComponent,
    DepositosautomaticosComponent,
    EmisionchequeComponent,
    TablapagoComponent,
    PolizasasociadasComponent,
    PrestamosaprobadosComponent,
    PrestamosdesaprobadosComponent,
    CprestamoactivoComponent,
    CprestamogarantiahipComponent,
    CprestamocobrojudComponent,
    ArreglopagoComponent,
    AcuerdosComponent,
    CobrojudComponent,
    CobroformalizadoComponent,
    CobrocuotaComponent,
    CobrodiferidoComponent,
    InformesComponent,
    DesembolsoautomaticoComponent,
    ComprobantepagoComponent,
    RprestamoactivoComponent,
    RprestamogarantiahipComponent,
    RprestamocobrojudComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrestamosModule { }
