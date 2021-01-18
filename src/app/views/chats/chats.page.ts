import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
tab: string = "chats";
viewType: string;    
  constructor(private route: Router) { }

  ngOnInit() {
  }
 setViewType(vt) {
    this.viewType = vt;
  }

 chatscreen() {
    this.route.navigate(['./chat-screen']);
  } 
 plan() {
    this.route.navigate(['./plan']);
  } 
}
