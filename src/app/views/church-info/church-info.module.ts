import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
    
import { IonicModule } from '@ionic/angular';

import { ChurchInfoPageRoutingModule } from './church-info-routing.module';

import { ChurchInfoPage } from './church-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    ChurchInfoPageRoutingModule
  ],
  declarations: [ChurchInfoPage]
})
export class ChurchInfoPageModule {}
