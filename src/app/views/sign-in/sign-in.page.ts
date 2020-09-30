import { NgForm } from "@angular/forms";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit {
  @ViewChild("loginForm", { static: true }) public loginForm: NgForm;
  log: any;
  logined: any;

  constructor(
    private api: ApiService,
    private route: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.init();
  }

  signIn() {
    this.api.post("login", this.log).subscribe((res) => {
      if(res.token) {
        console.log(res);
        localStorage.setItem('HHC', JSON.stringify(res.token));
        this.route.navigate(["./home"]);
      }
    });
  }

  password() {
    this.route.navigate(["./forgot-password"]);
  }

  signup() {
    this.route.navigate(["./sign-up"]);
  }

  init() {
    this.log = { email: "", password: "" };
  }
}
