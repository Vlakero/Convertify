import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculoDeCorrientePageRoutingModule } from './calculo-de-corriente-routing.module';

import { CalculoDeCorrientePage } from './calculo-de-corriente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculoDeCorrientePageRoutingModule
  ],
  declarations: [CalculoDeCorrientePage]
})
export class CalculoDeCorrientePageModule {}
