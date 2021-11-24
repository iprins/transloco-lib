import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient : HttpClient) { }

  getFromBackend(){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    this.httpClient.get('http://localhost:4200', { headers, responseType: 'text'}).subscribe(data => {
      console.log('Total:' + data);
    });
  }
}
