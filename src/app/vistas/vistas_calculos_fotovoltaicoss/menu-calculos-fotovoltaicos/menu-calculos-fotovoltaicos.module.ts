import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCalculosfotoPageRoutingModule } from './menu-calculos-fotovoltaicos-routing.module';

import { MenuCalculosfotoPage } from './menu-calculos-fotovoltaicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCalculosfotoPageRoutingModule
  ],
  declarations: [MenuCalculosfotoPage]
})
export class MenuCalculosfotoPageModule {}
