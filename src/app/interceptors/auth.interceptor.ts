import { Injectable } from '@angular/core';
import { Router, Routes, RouterStateSnapshot } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpUserEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorsService } from '../services/errors.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    state: RouterStateSnapshot; url: any; cur: any;
    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, public notify: NotificationService, private jwtHelper: JwtHelperService, private error: ErrorsService, ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.cur = req.url;
        this.url = this.cur.split('/').slice(-2)[0]; // console.log(this.url);
        if (this.url === 'upload') {
            req = req.clone({
                setHeaders: {
                    // 'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${this.jwtHelper.tokenGetter()}`
                }
            });
        } else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded' ,
                    // 'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${this.jwtHelper.tokenGetter()}`
                    // Authorization: `Bearer ` + this.jwtHelper.tokenGetter()
                }
            });
        }
        // this.error.request(req);
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
                // console.log(event);
                if (event.body && event.ok) {
                    // this.notify.Notify(event.body);
                    if(event.body.access_token) {
                        // localStorage.setItem('QsiApp', JSON.stringify(event.body.access_token));
                    }
                }
            }
        }, (err: any) => {
            // this.error.log(err); // console.log(err);
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.notify.error('Login Session Expired Please Login Again');
                    localStorage.removeItem('HHC');
                    return this.router.navigate(['/sign-in']);
                }
            }
            const msg = err.error.message || err.message;
            this.notify.error(msg);
        }));
    }
}

