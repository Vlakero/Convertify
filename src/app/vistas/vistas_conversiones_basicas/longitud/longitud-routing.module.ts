import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongitudPage } from './longitud.page';

const routes: Routes = [
  {
    path: '',
    component: LongitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LongitudPageRoutingModule {}
