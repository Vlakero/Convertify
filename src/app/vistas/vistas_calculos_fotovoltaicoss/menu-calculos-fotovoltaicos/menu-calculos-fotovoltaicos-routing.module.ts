import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCalculosfotoPage } from './menu-calculos-fotovoltaicos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCalculosfotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCalculosfotoPageRoutingModule {}
