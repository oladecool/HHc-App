import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
    constructor(private injector: Injector, private error: ErrorsService) { }
    handleError(error: Error | HttpErrorResponse) {
        const notificationService = this.injector.get(NotificationService);
        // const errorsService = this.injector.get(ErrorsService);
        // const router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {
            // Server error happened
            if (!navigator.onLine) {
                // No Internet connection
                // return notificationService.notify('No Internet Connection');
            }
          
        } else {
          
        }
    }
}
