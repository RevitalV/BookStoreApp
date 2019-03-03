import { Component } from '@angular/core';
import { BooksDataService } from './books-data.service';
import { ShoppingListService } from './shoppingList/shopping-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BooksDataService]
})
export class AppComponent {
  title = 'BookStoreApp';
  constructor(private booksDataService: BooksDataService, private shoppingListService: ShoppingListService) { }
}
