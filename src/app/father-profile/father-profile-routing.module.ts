import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatherProfilePage } from './father-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FatherProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatherProfilePageRoutingModule {}
