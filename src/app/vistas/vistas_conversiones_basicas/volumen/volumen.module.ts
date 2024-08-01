import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolumenPageRoutingModule } from './volumen-routing.module';

import { VolumenPage } from './volumen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolumenPageRoutingModule
  ],
  declarations: [VolumenPage]
})
export class VolumenPageModule {}
