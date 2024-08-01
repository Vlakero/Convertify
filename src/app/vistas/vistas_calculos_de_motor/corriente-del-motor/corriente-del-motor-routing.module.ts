import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrienteDelMotorPage } from './corriente-del-motor.page';

const routes: Routes = [
  {
    path: '',
    component: CorrienteDelMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrienteDelMotorPageRoutingModule {}
