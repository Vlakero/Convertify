import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculosFotovoltaicosPage } from './calculos-fotovoltaicos.page';

const routes: Routes = [
  {
    path: '',
    component: CalculosFotovoltaicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculosFotovoltaicosPageRoutingModule {}
