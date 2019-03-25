import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model';
import { BooksDataService } from '../books-data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {


  books: Book[];



  constructor(private booksDataService: BooksDataService) {
    this.booksDataService.dataChanged.subscribe((data: Book[]) => {
      this.books = data;
      console.log(' books.length : ' + this.books.length);
    });
  }

  ngOnInit() {
    this.booksDataService.getBooksData();
  }


}
