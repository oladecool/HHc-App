import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ReadPrayerPageRoutingModule } from './read-prayer-routing.module';

import { ReadPrayerPage } from './read-prayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    ReadPrayerPageRoutingModule
  ],
  declarations: [ReadPrayerPage]
})
export class ReadPrayerPageModule {}
