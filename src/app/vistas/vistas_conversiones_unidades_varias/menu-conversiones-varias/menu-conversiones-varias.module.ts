import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuConversionesVariasPageRoutingModule } from './menu-conversiones-varias-routing.module';

import { MenuConversionesVariasPage } from './menu-conversiones-varias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuConversionesVariasPageRoutingModule
  ],
  declarations: [MenuConversionesVariasPage]
})
export class MenuConversionesVariasPageModule {}
