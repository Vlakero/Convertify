import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCalculosElectricosPageRoutingModule } from './menu-calculos-electricos-routing.module';

import { MenuCalculosElectricosPage } from './menu-calculos-electricos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCalculosElectricosPageRoutingModule
  ],
  declarations: [MenuCalculosElectricosPage]
})
export class MenuCalculosElectricosPageModule {}
