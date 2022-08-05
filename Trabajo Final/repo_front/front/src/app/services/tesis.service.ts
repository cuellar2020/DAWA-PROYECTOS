import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TesisService {
  url = 'http://localhost:4000/api/tesis/';
  
  constructor(private http: HttpClient) { }

  guardarUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }

  obtenerUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  getUser(): Observable<any> {
    return this.http.get(this.url);
  }

}
