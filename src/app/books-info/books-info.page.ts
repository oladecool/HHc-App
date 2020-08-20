import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Books } from '../interface/books';

@Component({
  selector: 'app-books-info',
  templateUrl: './books-info.page.html',
  styleUrls: ['./books-info.page.scss'],
})
export class BooksInfoPage implements OnInit {


  constructor(private api: ApiService) { }

  ngOnInit() {

  }




}
