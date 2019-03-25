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


  private _searchTerm: string;
  dataChanged = new EventEmitter<Book[]>();

  filteredBooksData: Book[];

  constructor() {
    this.filteredBooksData = this.booksData;
  }


  getBookById(id: number) {
    return this.booksData[id];
  }

  getBooksData() {
    this.dataChanged.emit(this.filteredBooksData);
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    console.log('searchTerm : ' + value);
    this._searchTerm = value;
    if (this.filteredBooksData && value) {
      console.log('searchTerm 2: ' + value);
      this.filteredBooksData = this.filterBooks(value);

    } else {
      this.filteredBooksData = this.booksData;
    }
    this.dataChanged.emit(this.filteredBooksData);
  }

  filterBooks(value: string) {
    return this.booksData.filter(book => book.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}

