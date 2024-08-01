import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EficienciaDelMotorPageRoutingModule } from './eficiencia-del-motor-routing.module';

import { EficienciaDelMotorPage } from './eficiencia-del-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EficienciaDelMotorPageRoutingModule
  ],
  declarations: [EficienciaDelMotorPage]
})
export class EficienciaDelMotorPageModule {}
