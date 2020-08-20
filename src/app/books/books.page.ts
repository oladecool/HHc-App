import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any[] = [];
  filtered: any[] = [];
  book: any;

  constructor(private route: Router, private api: ApiService, private notify: NotificationService) { }

  ngOnInit() {
    this.init();
    this.getBooks();
  }

  getBooks(){
    this.api.get('books').subscribe((data: any[]) => {
      console.log(data);
      this.books = data; this.filtered = data;
    })  
  }

  bookinfo() {
    this.route.navigate(['./books-info']);
  }  

  init() {
    this.book = { 
      title: '', description: '', cover: '', price: '' 
    };
  }
}
