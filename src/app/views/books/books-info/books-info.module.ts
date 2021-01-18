import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { BooksInfoPageRoutingModule } from './books-info-routing.module';

import { BooksInfoPage } from './books-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,      
    BooksInfoPageRoutingModule
  ],
  declarations: [BooksInfoPage]
})
export class BooksInfoPageModule {}
