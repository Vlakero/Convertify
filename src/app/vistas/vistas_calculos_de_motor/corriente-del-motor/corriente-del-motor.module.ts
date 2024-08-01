import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrienteDelMotorPageRoutingModule } from './corriente-del-motor-routing.module';

import { CorrienteDelMotorPage } from './corriente-del-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrienteDelMotorPageRoutingModule
  ],
  declarations: [CorrienteDelMotorPage]
})
export class CorrienteDelMotorPageModule {}
