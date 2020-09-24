import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ApiService } from 'src/app/services/api.service';


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
  find_church() {
    this.route.navigate(["./find-church"]);
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
  live_stream() {
    this.route.navigate(["./live-stream"]);
  }
  podcast() {
    this.route.navigate(["./podcast"]);
  }
  donate() {
    this.route.navigate(["./donate"]);
  }
  website() {
    this.iab.create('http://holyhillchapelag.com/','_self', 'location=yes');
  }
  payment() {
    this.iab.create('http://paystack.com/pay/holyhill/','_self', 'location=yes');
  }

  share() {
    // this.api.social();
  }

}
