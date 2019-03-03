import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'details/:id', component: BookDetailsComponent },
  { path: 'shopping', component: ShoppingListComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
