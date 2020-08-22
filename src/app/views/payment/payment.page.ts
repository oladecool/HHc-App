import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

 constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
 dismiss(){
   this.modalController.dismiss();
 }
 
 father_profile() {
    this.modalController.dismiss();     
    this.route.navigate(['./father-profile']);
  } 
}
