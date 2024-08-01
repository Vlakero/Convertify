import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalibreDelCablePage } from './calibre-del-cable.page';

const routes: Routes = [
  {
    path: '',
    component: CalibreDelCablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalibreDelCablePageRoutingModule {}
