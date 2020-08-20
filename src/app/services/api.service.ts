import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.apiUrl; 
  private isLoading = new Subject<boolean>();
  public Loading = this.isLoading.asObservable();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService ) { }

  show() {
    this.isLoading.next(true);
    // this.Loading = true;
  }

  hide() {
    this.isLoading.next(false);
    // this.Loading = false;
  }

  user() {
    return this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter());
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

}
