import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { PrayerTimePageRoutingModule } from './prayer-time-routing.module';

import { PrayerTimePage } from './prayer-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    PrayerTimePageRoutingModule
  ],
  declarations: [PrayerTimePage]
})
export class PrayerTimePageModule {}
