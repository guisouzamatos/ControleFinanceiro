import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { apiUrl } from '../models/apiUrl';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  api = new apiUrl;
  url = `${this.api.aUrl}api/Categorias`

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url)
  }

  PegarCategoriaPeloId(categoriaId: number) : Observable<Categoria>{
    const apiUrl = `${this.url}/${categoriaId}`
    return this.http.get<Categoria>(apiUrl)
  }

  NovaCategoria(categoria: Categoria) : Observable<any>{
    return this.http.post<Categoria>(this.url, categoria, httpOptions);
  }

  AtualizarCategoria(categoriaId: number, categoria: Categoria): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`
    return this.http.put<Categoria>(this.url, categoria, httpOptions);
  }

  ExcluirCategoria(categoriaId: number): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
