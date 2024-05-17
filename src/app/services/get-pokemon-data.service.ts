import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const  httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  sprites: {
    other: {
      showdown: {
        front_default: string;
      }
    }
  };
}

@Injectable({
  providedIn: 'root'
})
export class GetPokemonDataService {

  constructor( private http: HttpClient ) { }

  getPokemon( url: string ): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>( url, httpOptions )
  }

  getPokemonDetails( url: string ): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>( url, httpOptions )
  }
}
