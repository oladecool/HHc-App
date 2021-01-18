import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) { }
    
	async presentToast(msg: string, msgDuration= 1700, toastCssClass= '', toastClose= false) {
        const toast = await this.toastController.create({
            message: msg,
            duration: msgDuration,
            position: 'bottom',
            cssClass: toastCssClass
        });
        toast.present();
    }
  error(err) {
      this.presentToast(err || 'Internal Server Error', 3000, '', false);
//    Swal.fire({
//      position: 'top-end',
//      icon: 'error',
//      title: err || 'Internal Server Error',
//      showConfirmButton: true,
//      // timer: 3000
//    })
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
