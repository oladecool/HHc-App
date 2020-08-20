import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { MyEvent } from 'services/myevent.services';
import { Constants } from 'models/contants.models';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  rtlSide = "left";
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      image: 'assets/imgs/ic_home.png'
    },
    {
      title: 'bible',
      url: '/bible',
      image: 'assets/imgs/ic_bible.png'
    },
    {
      title: 'books',
      url: '/books',
      image: 'assets/imgs/ic_book.png' 
    },
    {
      title: 'chat_father',
      url: '/chats',
      image: 'assets/imgs/ic_chat.png'
    }, 
     {
      title: 'find_church',
      url: '/find-church',
      image: 'assets/imgs/ic_church.png'
    },
    {
      title: 'video',
      url: '/movies',
      image: 'assets/imgs/ic_gallery.png'
    },
    {
      title: 'fathers',
      url: '/chats',
      image: 'assets/imgs/ic_father.png'
    },
    {
      title: 'prayers',
      url: '/prayers',
      image: 'assets/imgs/ic_prayer.png'
    }, 
     {
      title: 'events',
      url: '/events',
      image: 'assets/imgs/ic_events.png'
    },
    {
      title: 'prayer_times',
      url: '/prayer-time',
      image: 'assets/imgs/ic_prayer_time.png'
    },  
     {
      title: 'share_app',
//      url: '/prayer-time',
      image: 'assets/imgs/ic_share.png'
    },  
     {
      title: 'website',
//      url: '/prayer-time',
      image: 'assets/imgs/ic_web.png'
    },
    {
      title: 'feedback',
      url: '/feedback',
      image: 'assets/imgs/ic_feedback.png'
    },
    {
      title: 'logout',
      url: '/sign-in',
      image: 'assets/imgs/ic_logout.png'
    },
  ]; 

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, private myEvent: MyEvent) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  buyAppAction() {
    window.open("https://bit.ly/cc2_TheChurch", '_system', 'location=no');
  }

 profile() {
    this.navCtrl.navigateRoot(['./my-profile']);
  }     
}
