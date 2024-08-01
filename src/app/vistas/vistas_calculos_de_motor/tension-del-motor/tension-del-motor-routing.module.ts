import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TensionDelMotorPage } from './tension-del-motor.page';

const routes: Routes = [
  {
    path: '',
    component: TensionDelMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TensionDelMotorPageRoutingModule {}
