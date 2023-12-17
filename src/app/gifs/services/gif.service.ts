import { Datum, GIFExpert } from './../interfaces/gif.interface';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  baseUrl= environment.baseURL
  apiKey = environment.apiKey

  listaProductos = new EventEmitter<Datum[]>()

  constructor(private http: HttpClient) { }

    getGifs(term: string): Observable<GIFExpert | any>{
      return this.http.get<GIFExpert>(`${this.baseUrl}${this.apiKey}&q=${term}`)
      .pipe(
        catchError(()=> of([]))
      )
    }

}
