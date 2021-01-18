import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveStreamPageRoutingModule } from './live-stream-routing.module';

import { LiveStreamPage } from './live-stream.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    LiveStreamPageRoutingModule
  ],
  declarations: [LiveStreamPage]
})
export class LiveStreamPageModule {}
