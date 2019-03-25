import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shoppingList/shopping-list.service';
import { Book } from '../book.model';
import { BooksDataService } from '../books-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numOfItems: number;
  private _searchTerm: string;
  constructor(private shoppingListService: ShoppingListService, private booksDataService: BooksDataService) { }

  ngOnInit() {
    this.numOfItems = this.shoppingListService.getNumOfItems();
    this.shoppingListService.numberOfItemsChanged.subscribe((data: number) => {
      this.numOfItems = data;
    });
  }

  hasItems() {
    if (this.numOfItems > 0) {
      return true;
    }
    return false;
  }

  getNumOfItems() {
    return this.numOfItems;
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.booksDataService.searchTerm = this._searchTerm;
  }
}
