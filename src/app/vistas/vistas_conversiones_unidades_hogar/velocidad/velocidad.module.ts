import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VelocidadPageRoutingModule } from './velocidad-routing.module';

import { VelocidadPage } from './velocidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VelocidadPageRoutingModule
  ],
  declarations: [VelocidadPage]
})
export class VelocidadPageModule {}
