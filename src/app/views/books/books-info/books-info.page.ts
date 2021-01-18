import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-info',
  templateUrl: './books-info.page.html',
  styleUrls: ['./books-info.page.scss'],
})
export class BooksInfoPage implements OnInit {
    url: "https://www.amazon.com/KWADWO-BOATENG-BEMPAH/e/B08K7NGPFB?ref=sr_ntt_srch_lnk_2&qid=1601502216&sr=8-2l";
  // public book: Books;
  book: any = { };

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.init();
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // this.book = this.api.getBooks(id);

    this.getBooks(id);
    // this.Books(id);
  }

  // Books(id){
  //   this.api.getBooks(id).subscribe((data: any[]) => {
  //     console.log(data)
  //     this.books = data;
  //   })
  // }

  getBooks(id){
    this.api.get('books/'+id).subscribe((data: any) => {
      // console.log(data);
      this.book = data.data;
    });
  }
  
  buybooks(){
    this.url;
  }

  init() {
    this.book = { 
      title: '', description: '', cover: '', price: '' 
    };
  }

}
