import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book.model';
import { BooksDataService } from '../books-data.service';
import { ShoppingListService } from 'src/app/shoppingList/shopping-list.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})



export class BookDetailsComponent implements OnInit {

  currentBook: Book;
  numberOfItem: number;
  success: boolean;
  // currentBook: Book = new Book(0,'Cool1', 'ECB', 'English Book 6th grade', 'ECB',
  //   'https://dqt7m27rg71w0.cloudfront.net/wp-content/uploads/2017/08/03083447/Cool_SB-copy.png');

  constructor(private booksDataService: BooksDataService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.success = true;
    console.log(this.route.snapshot.params);
    const id = this.route.snapshot.params['id'];
    this.currentBook = this.booksDataService.getBookById(id);
  }


  addNewItem(form: HTMLFormElement) {
    console.log('Add Item was clicked');
    this.currentBook.numOfItems = form.value;
    this.success = this.shoppingListService.addItem(this.currentBook);
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
