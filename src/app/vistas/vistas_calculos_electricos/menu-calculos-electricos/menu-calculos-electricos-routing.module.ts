import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCalculosElectricosPage } from './menu-calculos-electricos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCalculosElectricosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCalculosElectricosPageRoutingModule {}
