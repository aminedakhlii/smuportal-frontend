import { Component, OnInit } from '@angular/core';
import {BmsService} from "@app/shared/services"
import { Book } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor(private bmsService: BmsService) { }

  ngOnInit() {
    this.bmsService.getBooks().subscribe({
      next: (data: Book[]) => this.listOfBooks.next(data),
      error: (data: any) => console.log(data)

    })
  }

  deleteBook(bookId: string) {
    console.log("BookID", bookId);

  }

}
