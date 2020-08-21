import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

import { Books } from '../interface/books';

@Component({
  selector: 'app-books-info',
  templateUrl: './books-info.page.html',
  styleUrls: ['./books-info.page.scss'],
})
export class BooksInfoPage implements OnInit {

  books: any[] = [];
  filtered: any[] = [];
  book: any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.init();
    this.getBooks();
  }

  getBooks(){
    this.api.get('books').subscribe((data: any[]) => {
      console.log(data);
      this.books = data; this.filtered = data;
    })  
  }

  init() {
    this.book = { 
      title: '', description: '', cover: '', price: '' 
    };
  }

}
