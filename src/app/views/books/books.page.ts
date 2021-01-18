import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
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

  constructor(private route: Router, private api: ApiService, private iab: InAppBrowser,
    ) { }

  ngOnInit() {
    // this.getBooks();
    // this.Books();
  }

  Books() {
    const option: InAppBrowserOptions ={
      zoom: 'no',
      hardwareback: 'no'
    }
   this.iab.create("http://paystack.com/pay/holyhill/", "_self", option);
  }

  // getBooks(){
  //   this.api.get('books').subscribe((res: Books) => {
  //     console.log(res.data);
  //     this.books = res.data; 
  //     this.filtered = res.data;
  //   })  
  // }

  // Books(){
  //   this.api.getBooks().subscribe((data: any[]) => {
  //     console.log(data)
  //     this.books = data;
  //   })
  // }

  bookinfo(book) {
    this.route.navigate(['/books',book.id]);
  }  

  // init() {
  //   this.book = { 
  //     title: '', description: '', cover: '', price: '' 
  //   };
  // }
}
