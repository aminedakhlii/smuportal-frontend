import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from 'rxjs';
import {Book} from '../models/book.model'



@Injectable({
  providedIn: 'root'
})
export class BmsService {

  constructor(private httpClient: HttpClient) { }

  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  getBooks(): void {
   this.httpClient.get<Book[]>("http://localhost:3000/api/user/getBooks").subscribe({
    next: (data: Book[]) => this.listOfBooks.next(data),
    error: (data: any) => console.log(data)

  })
  }

  getList(): Observable<Book[]> {
    if(of(this.listOfBooks)) {
      this.getBooks();
    }
    return this.listOfBooks.asObservable();
  }

  deleteBook(bookISBN: string): void {
     this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteBook/${bookISBN}`).subscribe({
      next: (data: any) => {
        console.log(data);
        this.deleteBookByID(bookISBN);
      },
      error: (data: any) => console.log(data)

    })
  }

  addBook(book: Book): void {
     this.httpClient.post<any>("http://localhost:3000/api/user/addBook", book).subscribe({
       next: (data: any) => {
        this.addNewBook(book);
        console.log(data);
       },
       error: (data: any) => console.warn(data)

     })
  }

  private deleteBookByID(bookISBN: string) {
    const books: Book[] = this.listOfBooks.getValue();
    books.forEach((book, index) => {
      if(book.ISBN === bookISBN) {books.splice(index, 1);}
    })
    this.listOfBooks.next(books);
  }

  private addNewBook(book: Book) {
    const books: Book[] = this.listOfBooks.getValue();
    books.push(book);
    this.listOfBooks.next(books);
  }
}


