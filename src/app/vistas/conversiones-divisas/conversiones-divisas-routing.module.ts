import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversionesDivisasPage } from './conversiones-divisas.page';

const routes: Routes = [
  {
    path: '',
    component: ConversionesDivisasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversionesDivisasPageRoutingModule {}
