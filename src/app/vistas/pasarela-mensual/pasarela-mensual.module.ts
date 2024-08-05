import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PasarelaMensualPageRoutingModule } from './pasarela-mensual-routing.module';
import { PasarelaMensualPage } from './pasarela-mensual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarelaMensualPageRoutingModule
  ],
  declarations: [PasarelaMensualPage]
})
export class PasarelaMensualPageModule {}
