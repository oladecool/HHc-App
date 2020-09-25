import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateLoader, TranslateService, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { ApiService } from './services/api.service';
import { JwtModule } from '@auth0/angular-jwt';
import { NotificationService } from './services/notification.service';
import { ErrorsService } from './services/errors.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';


export function tokenGetter() {
  return JSON.parse(localStorage.getItem('HHC'));
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
   imports: [
    BrowserModule, 
    FormsModule,
	  IonicModule.forRoot(), 
      // PaymentPageModule,   
      AppRoutingModule,
      HttpClientModule,
      TranslateModule,      
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    ThemeableBrowser,
    SplashScreen,
    OneSignal,
    SocialSharing,
    ThemeableBrowser,
    InAppBrowser,
    ApiService, 
    NotificationService,
    ErrorsService,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
