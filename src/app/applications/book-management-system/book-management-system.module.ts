import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ListBooksComponent } from './list-books/list-books.component';

const routes: Routes = [
  {
    path: "list",
    component: ListBooksComponent
  },
];

@NgModule({
  declarations: [ListBooksComponent],
  imports: [
    CommonModule
  ]
})
export class BookManagementSystemModule { }
