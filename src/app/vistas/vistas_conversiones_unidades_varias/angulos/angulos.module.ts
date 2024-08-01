import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngulosPageRoutingModule } from './angulos-routing.module';

import { AngulosPage } from './angulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngulosPageRoutingModule
  ],
  declarations: [AngulosPage]
})
export class AngulosPageModule {}
