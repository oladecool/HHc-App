import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';

import { ActivatedRoute, Router } from '@angular/router';

interface Books {
  data: Array<[]>;
}

@Component({
  selector: 'app-books-info',
  templateUrl: './books-info.page.html',
  styleUrls: ['./books-info.page.scss'],
})
export class BooksInfoPage implements OnInit {

  books: any[] = [];
  book: any = { title: '', description: '', cover: '', price: '' };

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.getBooks(id);
  }

  getBooks(id){
    this.api.get('books/'+id).subscribe((data: any[]) => {
      console.log(data);
      this.book = data;
    })  
  }

  // init() {
  //   this.book = { 
  //     title: '', description: '', cover: '', price: '' 
  //   };
  // }

}
