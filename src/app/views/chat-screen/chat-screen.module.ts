import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ChatScreenPageRoutingModule } from './chat-screen-routing.module';

import { ChatScreenPage } from './chat-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    ChatScreenPageRoutingModule
  ],
  declarations: [ChatScreenPage]
})
export class ChatScreenPageModule {}
