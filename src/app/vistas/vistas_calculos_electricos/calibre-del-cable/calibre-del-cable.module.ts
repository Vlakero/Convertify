import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalibreDelCablePageRoutingModule } from './calibre-del-cable-routing.module';

import { CalibreDelCablePage } from './calibre-del-cable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalibreDelCablePageRoutingModule
  ],
  declarations: [CalibreDelCablePage]
})
export class CalibreDelCablePageModule {}
