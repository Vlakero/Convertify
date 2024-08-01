import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VelocidadPage } from './velocidad.page';

const routes: Routes = [
  {
    path: '',
    component: VelocidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VelocidadPageRoutingModule {}
