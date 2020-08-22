import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-read-prayer',
  templateUrl: './read-prayer.page.html',
  styleUrls: ['./read-prayer.page.scss'],
})
export class ReadPrayerPage implements OnInit {
@ViewChild('mySlider1, mySlider')  slides: IonSlides; 
  constructor() { }

  ngOnInit() {
  }
 swipeNext(){
    this.slides.slideNext();
  } 
 swipePrev(){
    this.slides.slidePrev();
  }
}
