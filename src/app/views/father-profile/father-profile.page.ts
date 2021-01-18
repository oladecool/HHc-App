import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-father-profile',
  templateUrl: './father-profile.page.html',
  styleUrls: ['./father-profile.page.scss'],
})
export class FatherProfilePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 chatscreen() {
    this.route.navigate(['./chat-screen']);
  } 
}
