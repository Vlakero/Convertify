import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PotenciaDelMotorPage } from './potencia-del-motor.page';

const routes: Routes = [
  {
    path: '',
    component: PotenciaDelMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotenciaDelMotorPageRoutingModule {}
