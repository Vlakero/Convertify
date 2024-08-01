import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotenciaDelMotorPageRoutingModule } from './potencia-del-motor-routing.module';

import { PotenciaDelMotorPage } from './potencia-del-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PotenciaDelMotorPageRoutingModule
  ],
  declarations: [PotenciaDelMotorPage]
})
export class PotenciaDelMotorPageModule {}
