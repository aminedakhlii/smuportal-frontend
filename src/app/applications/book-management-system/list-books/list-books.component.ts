import { Component, OnInit, OnDestroy} from '@angular/core';
import {BmsService} from "@app/shared/services"
import { Book } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit,OnDestroy{

  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  // Second
  bookRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public bmsService: BmsService, private router: Router) { }

  ngOnInit() {
   this.bmsService.getList().subscribe(books => this.listOfBooks.next(books));
  }

  ngOnDestroy() {
  }

  deleteBook(bookISBN: string) {
    this.bmsService.deleteBook(bookISBN);
    this.bookRemoved.next(true);
    
  }

  goToAdd() {
    this.router.navigate(["/apps/bms/add"])
  }

}
