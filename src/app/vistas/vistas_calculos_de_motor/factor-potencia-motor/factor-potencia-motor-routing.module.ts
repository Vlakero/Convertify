import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactorPotenciaMotorPage } from './factor-potencia-motor.page';

const routes: Routes = [
  {
    path: '',
    component: FactorPotenciaMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactorPotenciaMotorPageRoutingModule {}
