import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConversionesVariasPage } from './menu-conversiones-varias.page';

const routes: Routes = [
  {
    path: '',
    component: MenuConversionesVariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuConversionesVariasPageRoutingModule {}
