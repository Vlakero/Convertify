import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuConversionesCienciaPageRoutingModule } from './menu-conversiones-ciencia-routing.module';

import { MenuConversionesCienciaPage } from './menu-conversiones-ciencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuConversionesCienciaPageRoutingModule
  ],
  declarations: [MenuConversionesCienciaPage]
})
export class MenuConversionesCienciaPageModule {}
