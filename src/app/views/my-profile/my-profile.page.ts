import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  name: any;
  email: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    if (localStorage.getItem('HHC')) {
      this.api.getUser().subscribe((res:any) => {
        this.name = res.user.name;
        this.email = res.user.email;
      }, err => {

      })
    }
  }

}
