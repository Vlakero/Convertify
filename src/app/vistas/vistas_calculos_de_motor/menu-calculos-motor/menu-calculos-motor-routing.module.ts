import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCalculosMotorPage } from './menu-calculos-motor.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCalculosMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCalculosMotorPageRoutingModule {}
