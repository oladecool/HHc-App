import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimoniesPageRoutingModule } from './testimonies-routing.module';

import { TestimoniesPage } from './testimonies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    TestimoniesPageRoutingModule
  ],
  declarations: [TestimoniesPage]
})
export class TestimoniesPageModule {}
