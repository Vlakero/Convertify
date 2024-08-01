import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EficienciaDelMotorPage } from './eficiencia-del-motor.page';

const routes: Routes = [
  {
    path: '',
    component: EficienciaDelMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EficienciaDelMotorPageRoutingModule {}
