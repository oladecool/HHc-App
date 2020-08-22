import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Books } from '../../interface/books';

@Component({
  selector: 'app-books-info',
  templateUrl: './books-info.page.html',
  styleUrls: ['./books-info.page.scss'],
})
export class BooksInfoPage implements OnInit {

  books: any[] = [];
  filtered: any[] = [];
  book: any;

  constructor(private api: ApiService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.init();
    if(this.rout.snapshot.paramMap.has('id')){
      this.getBooks(this.rout.snapshot.paramMap.get('id'));
    }
  }

  getBooks(id){
    this.api.get('books/'+id).subscribe((data: any) => {
      console.log(data);
      this.book = data;
    })  
  }

  init() {
    this.book = { 
      title: '', description: '', cover: '', price: '' 
    };
  }

}
