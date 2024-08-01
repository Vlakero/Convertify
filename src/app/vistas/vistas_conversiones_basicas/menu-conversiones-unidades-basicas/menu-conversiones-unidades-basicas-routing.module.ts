import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConversionesUnidadesBasicasPage } from './menu-conversiones-unidades-basicas.page';

const routes: Routes = [
  {
    path: '',
    component: MenuConversionesUnidadesBasicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuConversionesUnidadesBasicasPageRoutingModule {}
