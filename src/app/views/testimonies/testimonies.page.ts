import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.page.html',
  styleUrls: ['./testimonies.page.scss'],
})
export class TestimoniesPage implements OnInit {
  @ViewChild('signUpForm', {static: true}) public signUpForm: NgForm;
  test: any;

  constructor(private navCtrl: NavController, private api: ApiService, private rout: Router) { }

  ngOnInit() {
    this.init();
  } 
  
  Addtestimony() {
    this.api.post("testimonies", this.test).subscribe((res) => {
      console.log(res);
      this.rout.navigate(["./home"]);
    });
  }

  init() {
    this.test = { member_id: '', story: '', }
  }


}
