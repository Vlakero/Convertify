import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactorPotenciaMotorPageRoutingModule } from './factor-potencia-motor-routing.module';

import { FactorPotenciaMotorPage } from './factor-potencia-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactorPotenciaMotorPageRoutingModule
  ],
  declarations: [FactorPotenciaMotorPage]
})
export class FactorPotenciaMotorPageModule {}
