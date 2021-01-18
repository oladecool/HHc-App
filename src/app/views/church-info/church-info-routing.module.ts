import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurchInfoPage } from './church-info.page';

const routes: Routes = [
  {
    path: '',
    component: ChurchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurchInfoPageRoutingModule {}
