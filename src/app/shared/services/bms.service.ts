import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Book} from '../models/book.model'



@Injectable({
  providedIn: 'root'
})
export class BmsService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
  return this.httpClient.get<Book[]>("http://localhost:3000/api/user/getBooks");

  }
}


