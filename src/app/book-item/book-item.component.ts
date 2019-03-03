import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BooksDataService } from '../books-data.service';
import { ShoppingListService } from '../shoppingList/shopping-list.service';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Input() numOfItems: number;
  success = true;
  constructor(private booksDataService: BooksDataService, private shoppingListService: ShoppingListService, private router: Router) { }

  ngOnInit() {
  }

  onSelect(id: number) {
    console.log(this.book.name);
    this.router.navigate(['/details', id], { skipLocationChange: true });
  }

  onAddBook(form: HTMLFormElement) {
    this.book.numOfItems = form.value;
    this.success = this.shoppingListService.addItem(this.book);
  }

  onMinusClick(form: HTMLFormElement) {
    form.value = (+form.value) > 1 ? (+form.value - 1) : 1;
  }

  onPlusClick(form: HTMLFormElement) {
    form.value = (+form.value) < 10 ? (+form.value + 1) : 10;
  }

  onKey(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    if (!(/0-9/.test(inputChar))) {
      event.preventDefault();
    }
  }
}
