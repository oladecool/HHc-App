import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.page.html',
  styleUrls: ['./prayers.page.scss'],
})
export class PrayersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

readprayers() {
    this.route.navigate(['./read-prayer']);
  }  
}
