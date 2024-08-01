import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculoDeCorrienteMaximaPageRoutingModule } from './calculo-de-corriente-maxima-routing.module';

import { CalculoDeCorrienteMaximaPage } from './calculo-de-corriente-maxima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculoDeCorrienteMaximaPageRoutingModule
  ],
  declarations: [CalculoDeCorrienteMaximaPage]
})
export class CalculoDeCorrienteMaximaPageModule {}
