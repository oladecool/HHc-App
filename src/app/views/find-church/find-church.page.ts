import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-church',
  templateUrl: './find-church.page.html',
  styleUrls: ['./find-church.page.scss'],
})
export class FindChurchPage implements OnInit {
 faqExpand1: boolean;
   faqExpand2: boolean;
   faqExpand3: boolean;
   faqExpand4: boolean;
  constructor(private route: Router) { }

  ngOnInit() {
  }
reset(){
  this.faqExpand1=false;
  this.faqExpand2=false;
  this.faqExpand3=false;
  this.faqExpand4=false;

  }
     faqExpandToggle1() {
  this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }

  faqExpandToggle2() {
  this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }

  faqExpandToggle3() {
  this.reset();
    this.faqExpand3 = !this.faqExpand3;
  }
 
  faqExpandToggle4() {
  this.reset();
    this.faqExpand4 = !this.faqExpand4;
  }

 church_info() {
    this.route.navigate(['./church-info']);
  }    
}
