import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasarelaMensualPage } from './pasarela-mensual.page';

const routes: Routes = [
  {
    path: '',
    component: PasarelaMensualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasarelaMensualPageRoutingModule {}
