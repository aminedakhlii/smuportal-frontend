import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import {Book} from '../models/book.model'



@Injectable({
  providedIn: 'root'
})
export class BmsService {

  constructor(private httpClient: HttpClient) { }


  getBooks(listOfBooks: BehaviorSubject<Book[]>): void {
   this.httpClient.get<Book[]>("http://localhost:3000/api/user/getBooks").subscribe({
    next: (data: Book[]) => listOfBooks.next(data),
    error: (data: any) => console.log(data)

  })
  }

  deleteBook(bookISBN: string, listOfBooks: BehaviorSubject<Book[]>, bookRemoved: BehaviorSubject<boolean>): void {
     this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteBook/${bookISBN}`).subscribe({
      next: (data: any) => {
        console.log(data);
        this.deleteBookByID(bookISBN, listOfBooks);
        bookRemoved.next(true);
      },
      error: (data: any) => console.log(data)

    })
  }

  addBook(book: Book): Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/api/user/addBook", book);
  }

  deleteBookByID(bookISBN: string, listOfBooks: BehaviorSubject<Book[]>) {
    const books: Book[] = listOfBooks.getValue();
    books.forEach((book, index) => {
      if(book.ISBN === bookISBN) {books.splice(index, 1);}
    })
    listOfBooks.next(books);
  }
}


