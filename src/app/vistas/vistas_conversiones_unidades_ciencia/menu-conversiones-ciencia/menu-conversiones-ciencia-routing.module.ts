import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConversionesCienciaPage } from './menu-conversiones-ciencia.page';

const routes: Routes = [
  {
    path: '',
    component: MenuConversionesCienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuConversionesCienciaPageRoutingModule {}
