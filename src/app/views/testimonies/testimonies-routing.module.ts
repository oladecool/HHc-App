import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimoniesPage } from './testimonies.page';

const routes: Routes = [
  {
    path: '',
    component: TestimoniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimoniesPageRoutingModule {}
