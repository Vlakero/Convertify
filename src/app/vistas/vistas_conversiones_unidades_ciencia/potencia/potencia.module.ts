import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotenciaPageRoutingModule } from './potencia-routing.module';

import { PotenciaPage } from './potencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PotenciaPageRoutingModule
  ],
  declarations: [PotenciaPage]
})
export class PotenciaPageModule {}
