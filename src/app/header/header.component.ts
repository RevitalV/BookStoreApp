import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shoppingList/shopping-list.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numOfItems: number;

  constructor(private shoppingListService: ShoppingListService) { }

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
}
