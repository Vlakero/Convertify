import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasarelaDePagoPage } from './pasarela-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: PasarelaDePagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasarelaDePagoPageRoutingModule {}
