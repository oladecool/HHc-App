import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindChurchPage } from './find-church.page';

const routes: Routes = [
  {
    path: '',
    component: FindChurchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindChurchPageRoutingModule {}
