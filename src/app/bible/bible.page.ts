import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

read_bible() {
    this.route.navigate(['./read-bible']);
  }  
}
