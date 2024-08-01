import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LongitudPageRoutingModule } from './longitud-routing.module';

import { LongitudPage } from './longitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongitudPageRoutingModule
  ],
  declarations: [LongitudPage]
})
export class LongitudPageModule {}
