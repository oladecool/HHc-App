import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.apiUrl; 
  private isLoading = new Subject<boolean>();
  public Loading = this.isLoading.asObservable();

  constructor(private http: HttpClient,public jwtHelper: JwtHelperService ) { }

  show() {
    this.isLoading.next(true);
    // this.Loading = true;
  }

  hide() {
    this.isLoading.next(false);
    // this.Loading = false;
  }

  getBooks() {
    return this.http.get('/assets/books.json');
  }

  // social() {
  //   let options = {
  //     message: "Holy HillChapel", // not supported on some apps (Facebook, Instagram)
  //     url: "http://holyhillchapelag.com/",
  //   };
  //   this.socialSharing.shareWithOptions(options);
  // }

  user() {
    let token = localStorage.getItem('HHC');
    if (!token) return null;

    return this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter());
  }

  getUser() {
    this.show();
    return this.http.get(this.api + 'user');
  }

  get(route) {
    this.show();
    return this.http.get(this.api + route);
  }

  post(rout, data): Observable<any> {
    this.show();
    return this.http.post(this.api + rout, JSON.stringify(data));
  }

  put(rout, data): Observable<any> {
    this.show();
    return this.http.put(this.api + rout, JSON.stringify(data));
  }

  delete(rout): Observable<any> {
    this.show();
    return this.http.delete(this.api + rout);
  }

  isLoggedIn() {
  }

}
