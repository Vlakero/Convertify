import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaidaTensionPageRoutingModule } from './caida-tension-routing.module';

import { CaidaTensionPage } from './caida-tension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaidaTensionPageRoutingModule
  ],
  declarations: [CaidaTensionPage]
})
export class CaidaTensionPageModule {}
