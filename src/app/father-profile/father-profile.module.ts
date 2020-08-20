import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FatherProfilePageRoutingModule } from './father-profile-routing.module';

import { FatherProfilePage } from './father-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    FatherProfilePageRoutingModule
  ],
  declarations: [FatherProfilePage]
})
export class FatherProfilePageModule {}
