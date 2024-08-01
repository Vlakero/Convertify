import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversionesDivisasPageRoutingModule } from './conversiones-divisas-routing.module';

import { ConversionesDivisasPage } from './conversiones-divisas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionesDivisasPageRoutingModule
  ],
  declarations: [ConversionesDivisasPage]
})
export class ConversionesDivisasPageModule {}
