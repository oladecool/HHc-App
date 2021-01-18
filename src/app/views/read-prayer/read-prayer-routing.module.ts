import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadPrayerPage } from './read-prayer.page';

const routes: Routes = [
  {
    path: '',
    component: ReadPrayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadPrayerPageRoutingModule {}
