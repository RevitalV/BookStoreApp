import { Injectable, EventEmitter } from '@angular/core';
import { Book } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {


  private booksData: Book[] = [
    new Book(1, 'Cool1', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book(2, 'Cool2', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book(3, 'Cool3', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book(4, 'Cool4', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book(5, 'Cool5', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book(6, 'Cool6', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png')
  ];

  dataChanged = new EventEmitter<Book[]>();


  constructor() {

  }


  getBookById(id: number) {
    return this.booksData[id];
  }

  getBooksData() {
    this.dataChanged.emit(this.booksData);
  }
}
