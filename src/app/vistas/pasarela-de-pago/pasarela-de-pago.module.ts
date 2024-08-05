import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasarelaDePagoPageRoutingModule } from './pasarela-de-pago-routing.module';

import { PasarelaDePagoPage } from './pasarela-de-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasarelaDePagoPageRoutingModule
  ],
  declarations: [PasarelaDePagoPage]
})
export class PasarelaDePagoPageModule {}
