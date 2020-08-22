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
  } 
  
  signUp() {
    this.api.post('register', this.log).subscribe((data)=> {
      console.log(data)
      if(data.access_token) {
        localStorage.setItem('HHC', JSON.stringify(data.access_token));
        this.rout.navigate(['./home']);
      }
    });
  }

 signin() {
    this.navCtrl.navigateRoot(['./sign-in']);
  } 

  init() {
    this.log = { fullname: '', mobile:'', email: '', departmentid: '', password: '', }
  }
}
