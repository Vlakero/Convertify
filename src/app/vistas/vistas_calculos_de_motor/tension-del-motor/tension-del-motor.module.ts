import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TensionDelMotorPageRoutingModule } from './tension-del-motor-routing.module';

import { TensionDelMotorPage } from './tension-del-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TensionDelMotorPageRoutingModule
  ],
  declarations: [TensionDelMotorPage]
})
export class TensionDelMotorPageModule {}
