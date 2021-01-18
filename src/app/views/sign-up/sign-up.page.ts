import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  @ViewChild('signUpForm', {static: true}) public signUpForm: NgForm;
  log: any;

  constructor(private navCtrl: NavController, private api: ApiService, private rout: Router) { }

  ngOnInit() {
    this.init();
  } 
  
  signUp() {
    this.api.post("register", this.log).subscribe((res) => {
      console.log(res);
      this.rout.navigate(["./sign-in"]);
    });
  }

  init() {
    this.log = { name: '', email: '', password: '', password_confirmation: '' }
  }
}
