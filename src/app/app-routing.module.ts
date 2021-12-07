import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './login/layout/layout.component';
import { LayoutComponent as CajaComponent } from './cajas/layout/layout.component';
import { LoginGuard } from './login/shared/guard/login.guard';
import { AuthGuard } from './login/shared/guard/auth.guard';
import { Rol } from './login/shared/models/rol.model';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LayoutComponent, canActivate:[LoginGuard] },
  { 
    path: 'cajas', 
    component: CajaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
