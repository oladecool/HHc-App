import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { FindChurchPageRoutingModule } from './find-church-routing.module';

import { FindChurchPage } from './find-church.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    FindChurchPageRoutingModule
  ],
  declarations: [FindChurchPage]
})
export class FindChurchPageModule {}
