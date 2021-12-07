import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    // SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AhorrosModule { }
