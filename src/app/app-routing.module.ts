import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LayoutComponent as LoginComponent } from './login/layout/layout.component';
import { LayoutComponent as CajaComponent } from './cajas/layout/layout.component';
import { LayoutComponent as AhorroComponent } from './ahorros/layout/layout.component';
import { SasNavbarComponent } from './sas/components/sas-navbar/sas-navbar.component'
import { LoginGuard } from './login/shared/guard/login.guard';
// import { NavBarComponent } from './prestamos/component/nav-bar/nav-bar.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'cajas', component: CajaComponent },
  { path: 'ahorros', component: AhorroComponent },
  { path: 'asociados', component: SasNavbarComponent },
  // { path: 'prestamos', component: NavBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
