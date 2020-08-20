import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent],
  exports:[SlidesComponent, StartComponent, LogoComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
