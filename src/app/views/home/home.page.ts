import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ApiService } from 'src/app/services/api.service';
import { ThemeableBrowserOptions, ThemeableBrowserObject, ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { InAppBrowserOptions } from '@ionic-native/in-app-browser';


@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private route: Router,
    private iab: InAppBrowser,
    private api: ApiService,
    private socialSharing: SocialSharing,
    private themeableBrowser: ThemeableBrowser
  ) {}

  ngOnInit() {}

  select_language() {
    this.route.navigate(["./select-language"]);
  }
  bible() {
    this.route.navigate(["./bible"]);
  }
  books() {
    this.route.navigate(["./books"]);
  }
  chats() {
    this.route.navigate(["./chats"]);
  }
  movies() {
    this.route.navigate(["./movies"]);
  }
  prayers() {
    this.route.navigate(["./prayers"]);
  }
 
  events() {
    this.route.navigate(["./events"]);
  }
  prayer_time() {
    this.route.navigate(["./prayer-time"]);
  }
  feedback() {
    this.route.navigate(["./feedback"]);
  }
  testimonies() {
    this.route.navigate(["./testimonies"]);
  }
  notes() {
    this.route.navigate(["./notes"]);
  }
  
  podcast() {
    this.route.navigate(["./podcast"]);
  }
  donate() {
    this.route.navigate(["./donate"]);
  }

  share() {
    // this.api.social();
    let options = {
      message: "share this", // not supported on some apps (Facebook, Instagram)
      url: "http://holyhillchapelag.com/",
    };
    this.socialSharing.shareWithOptions(options);
  }

  live_stream() {
    const option: InAppBrowserOptions ={
      zoom: 'no',
      hardwareback: 'no'
    }
   this.iab.create("https://www.youtube.com/channel/UCiH07V2Lhm-zwXxDPIw-qmA", "_self", option);
  }

  payment() {
    const option: InAppBrowserOptions ={
      zoom: 'no',
      hardwareback: 'no'
    }
   this.iab.create("http://paystack.com/pay/holyhill/", "_self", option);
  }

  website() {
    const option: InAppBrowserOptions ={
      zoom: 'no',
      hardwareback: 'no'
    }
   this.iab.create("http://holyhillchapelag.com/", "_self", option);
}
}
