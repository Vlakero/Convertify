import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuConversionesUnidadesBasicasPageRoutingModule } from './menu-conversiones-unidades-basicas-routing.module';

import { MenuConversionesUnidadesBasicasPage } from './menu-conversiones-unidades-basicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuConversionesUnidadesBasicasPageRoutingModule
  ],
  declarations: [MenuConversionesUnidadesBasicasPage]
})
export class MenuConversionesUnidadesBasicasPageModule {}
