import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

// interface book{
//   title:string,
// }
interface Books {
  data: Array<[]>;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any[] = [];
  filtered: any[] = [];
  book: any;

  constructor(private route: Router, private api: ApiService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.api.get('books').subscribe((res: Books) => {
      console.log(res.data);
      this.books = res.data; 
      this.filtered = res.data;
    })  
  }

  bookinfo(book) {
    this.route.navigate(['/books',book.id]);
  }  

  // init() {
  //   this.book = { 
  //     title: '', description: '', cover: '', price: '' 
  //   };
  // }
}
