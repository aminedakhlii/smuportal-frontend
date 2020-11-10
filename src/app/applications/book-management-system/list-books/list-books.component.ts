import { Component, OnInit, OnDestroy} from '@angular/core';
import {BmsService} from "@app/shared/services"
import { Book } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit,OnDestroy{

  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  // Second
  bookRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private bmsService: BmsService) { }

  ngOnInit() {
    this.bmsService.getBooks(this.listOfBooks);
  }

  ngOnDestroy() {
    this.listOfBooks.unsubscribe();
  }

  deleteBook(bookISBN: string) {
    this.bmsService.deleteBook(bookISBN, this.listOfBooks, this.bookRemoved);

  }

}
