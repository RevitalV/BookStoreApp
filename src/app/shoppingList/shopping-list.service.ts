import { Injectable, EventEmitter } from '@angular/core';
import { Book } from '../book.model';
import { forEach } from '@angular/router/src/utils/collection';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  shoppingListChanged = new EventEmitter<Book[]>();
  numberOfItemsChanged = new EventEmitter<number>();

  private books = [
    new Book(1, 'Cool1', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png'),
    new Book(2, 'Cool2', 'ECB', 'English Book 6th grade', 'ECB',
      'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png')];

  private numOfItems = 0;

  constructor() {
    this.numOfItems = 2;
  }

  getList() {
    return this.books.slice();
  }

  addItem(item: Book): boolean {
    let alreadyInList = false;

    for (let book of this.books) {
      if (item.id === book.id) {
        if ((book.numOfItems + +item.numOfItems) > 10) {
          return false;
        } else {
          book.numOfItems = book.numOfItems + +item.numOfItems;
          this.numOfItems = this.numOfItems + +item.numOfItems;
          this.numberOfItemsChanged.emit(this.numOfItems);
          alreadyInList = true;
          console.log('item in list');
        }
      }
    }

    if (!alreadyInList) {
      this.numOfItems = this.numOfItems + +item.numOfItems;
      this.books.push(item);
      this.shoppingListChanged.emit(this.books.slice());
      this.numberOfItemsChanged.emit(this.numOfItems);
      console.log('new Item');
    }
    return true;
  }

  removeItem(index: number) {
    this.numOfItems = this.numOfItems - +this.books[index].numOfItems;
    this.books.splice(index, 1);
    this.shoppingListChanged.emit(this.books.slice());
    this.numberOfItemsChanged.emit(this.numOfItems);
  }

  getNumOfItems() {
    return this.numOfItems;
  }



  // isAlreadyInList(item: Book): boolean {
  //   for (let book of this.books) {
  //     if (item.id === book.id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}
