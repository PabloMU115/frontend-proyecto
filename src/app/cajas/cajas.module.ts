import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class CajasModule { }
