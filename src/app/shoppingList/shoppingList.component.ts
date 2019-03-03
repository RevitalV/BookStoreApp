import { Component, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';
import { BooksListComponent } from '../books-list/books-list.component';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.scss']
})

export class ShoppingListComponent implements OnInit {
  title = 'My Shopping List';
  totalSum = 0;

  books: Book[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.books = this.shoppingListService.getList();
    this.shoppingListService.shoppingListChanged.subscribe((data: Book[]) => {
      this.books = data;
      this.calculateTotalSum();
    });
    this.calculateTotalSum();
  }

  addItem(item: Book) {
    console.log('Add Item Was Clicked');
    this.shoppingListService.addItem(item);
    this.calculateTotalSum();
  }

  removeItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.calculateTotalSum();
  }

  calculateTotalSum() {
    let sum = 0;
    if (this.books) {
      for (let book of this.books) {
        sum += (book.price * book.numOfItems);
      }
    }
    this.totalSum = sum;
  }

}
