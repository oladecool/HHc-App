import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiService } from 'src/app/services/api.service';
import { InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.page.html',
  styleUrls: ['./live-stream.page.scss'],
})
export class LiveStreamPage implements OnInit {

  constructor(private iab: InAppBrowser,private api: ApiService,
    ) { }

  ngOnInit() {
    // this.live();
  }

  // live() {
  //   const option: InAppBrowserOptions ={
  //     zoom: 'no',
  //     hardwareback: 'no'
  //   }
  //  this.iab.create("https://www.youtube.com/channel/UCiH07V2Lhm-zwXxDPIw-qmA", "_self", option);
  // }

}
