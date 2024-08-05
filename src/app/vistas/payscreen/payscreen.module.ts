import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayscreenPageRoutingModule } from './payscreen-routing.module';

import { PayscreenPage } from './payscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayscreenPageRoutingModule
  ],
  declarations: [PayscreenPage]
})
export class PayscreenPageModule {}
