import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCalculosMotorPageRoutingModule } from './menu-calculos-motor-routing.module';

import { MenuCalculosMotorPage } from './menu-calculos-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCalculosMotorPageRoutingModule
  ],
  declarations: [MenuCalculosMotorPage]
})
export class MenuCalculosMotorPageModule {}
