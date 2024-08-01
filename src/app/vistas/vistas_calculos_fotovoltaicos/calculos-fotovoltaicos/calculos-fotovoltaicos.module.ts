import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculosFotovoltaicosPageRoutingModule } from './calculos-fotovoltaicos-routing.module';

import { CalculosFotovoltaicosPage } from './calculos-fotovoltaicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculosFotovoltaicosPageRoutingModule
  ],
  declarations: [CalculosFotovoltaicosPage]
})
export class CalculosFotovoltaicosPageModule {}
