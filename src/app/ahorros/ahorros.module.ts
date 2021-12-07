import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AhorrosModule { }
