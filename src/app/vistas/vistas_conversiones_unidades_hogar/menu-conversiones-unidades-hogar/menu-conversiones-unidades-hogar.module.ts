import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuConversionesUnidadesHogarPageRoutingModule } from './menu-conversiones-unidades-hogar-routing.module';

import { MenuConversionesUnidadesHogarPage } from './menu-conversiones-unidades-hogar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuConversionesUnidadesHogarPageRoutingModule
  ],
  declarations: [MenuConversionesUnidadesHogarPage]
})
export class MenuConversionesUnidadesHogarPageModule {}
