import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConversionesUnidadesHogarPage } from './menu-conversiones-unidades-hogar.page';

const routes: Routes = [
  {
    path: '',
    component: MenuConversionesUnidadesHogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuConversionesUnidadesHogarPageRoutingModule {}
