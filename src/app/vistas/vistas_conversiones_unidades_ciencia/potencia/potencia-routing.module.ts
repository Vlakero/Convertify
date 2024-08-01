import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PotenciaPage } from './potencia.page';

const routes: Routes = [
  {
    path: '',
    component: PotenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotenciaPageRoutingModule {}
