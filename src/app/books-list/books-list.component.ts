import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model';
import { BooksDataService } from '../books-data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {


  books: Book[]; /*[
    new Book('Cool1', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book('Cool2', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book('Cool3', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book('Cool4', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book('Cool1', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book('Cool5', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png')
  ];*/

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
