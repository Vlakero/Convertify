import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaidaTensionPage } from './caida-tension.page';

const routes: Routes = [
  {
    path: '',
    component: CaidaTensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaidaTensionPageRoutingModule {}
