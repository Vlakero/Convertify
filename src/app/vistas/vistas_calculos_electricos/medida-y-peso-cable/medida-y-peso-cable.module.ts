import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidaYPesoCablePageRoutingModule } from './medida-y-peso-cable-routing.module';

import { MedidaYPesoCablePage } from './medida-y-peso-cable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidaYPesoCablePageRoutingModule
  ],
  declarations: [MedidaYPesoCablePage]
})
export class MedidaYPesoCablePageModule {}
