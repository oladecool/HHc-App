import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  getStarted() {
    localStorage.setItem('hhc', 'true');
    this.router.navigate(['/sign-up']);
  }

}
