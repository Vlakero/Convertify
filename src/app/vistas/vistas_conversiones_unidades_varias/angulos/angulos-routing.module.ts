import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngulosPage } from './angulos.page';

const routes: Routes = [
  {
    path: '',
    component: AngulosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngulosPageRoutingModule {}
