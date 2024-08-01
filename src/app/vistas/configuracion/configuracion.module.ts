import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';
import { ConfiguracionPage } from './configuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionPageRoutingModule,
  ],
  declarations: [ConfiguracionPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // Establecer el idioma predeterminado (español) para este módulo
  ],
})
export class ConfiguracionPageModule {}
