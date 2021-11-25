import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../models/apiUrl';
import { Tipo } from '../models/tipo';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  api = new apiUrl;
  url = `${this.api.aUrl}api/Tipos`;

  constructor(private http: HttpClient) { }

  PegarTodos() : Observable<Tipo[]>{
    return this.http.get<Tipo[]>(this.url);
  }
}
