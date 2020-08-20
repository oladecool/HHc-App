import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  error(err) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: err || 'Internal Server Error',
      showConfirmButton: true,
      // timer: 3000
    })
  }

  success(data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      // title: 'Your work has been saved',
      text: data.message || 'Your Submision has been saved',
      showConfirmButton: true,
      timer: 10000
    })
  }
}
