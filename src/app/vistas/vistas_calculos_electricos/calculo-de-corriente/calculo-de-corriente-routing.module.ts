import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculoDeCorrientePage } from './calculo-de-corriente.page';

const routes: Routes = [
  {
    path: '',
    component: CalculoDeCorrientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculoDeCorrientePageRoutingModule {}
