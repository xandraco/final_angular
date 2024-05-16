import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const  httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetPokemonDataService {

  constructor( private http: HttpClient ) { }

  getPokemon( url: string ): Observable<object> {
    return this.http.get( url, httpOptions )
  }
}
