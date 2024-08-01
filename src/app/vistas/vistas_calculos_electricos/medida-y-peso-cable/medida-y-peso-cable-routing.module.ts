import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedidaYPesoCablePage } from './medida-y-peso-cable.page';

const routes: Routes = [
  {
    path: '',
    component: MedidaYPesoCablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedidaYPesoCablePageRoutingModule {}
