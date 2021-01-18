import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { ReadBiblePageRoutingModule } from './read-bible-routing.module';

import { ReadBiblePage } from './read-bible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,      
    ReadBiblePageRoutingModule
  ],
  declarations: [ReadBiblePage]
})
export class ReadBiblePageModule {}
