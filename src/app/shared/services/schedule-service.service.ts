import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  constructor(private httpClient: HttpClient) { }

  upload(file : File) : any {

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post("http://localhost:3000/api/user/schedule/upload"  ,
      formData
    );
  }

  generate(): any {
    return this.httpClient.get("http://localhost:3000/api/user/schedule/generate") ;
  }

  download(): any {
    return this.httpClient.get("http://localhost:3000/api/user/schedule/download" , { responseType: 'blob' }) ;
  }


}
