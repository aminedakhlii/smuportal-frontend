import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ListBooksComponent } from './list-books/list-books.component';
import { BmsMainPageComponent } from './bms-main-page/bms-main-page.component';

const routes: Routes = [
  {
    path: "",
    component: BmsMainPageComponent
  },
  {
    path: "list",
    component: ListBooksComponent
  },
];

@NgModule({
  declarations: [ListBooksComponent, BmsMainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookManagementSystemModule { }
