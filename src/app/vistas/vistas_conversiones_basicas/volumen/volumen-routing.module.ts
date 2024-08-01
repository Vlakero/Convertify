import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumenPage } from './volumen.page';

const routes: Routes = [
  {
    path: '',
    component: VolumenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumenPageRoutingModule {}
