import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculoDeCorrienteMaximaPage } from './calculo-de-corriente-maxima.page';

const routes: Routes = [
  {
    path: '',
    component: CalculoDeCorrienteMaximaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculoDeCorrienteMaximaPageRoutingModule {}
