import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Pokemon } from '../../entities/pokemon';
import { GetPokemonDataService } from '../../services/get-pokemon-data.service';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { AddPokemonComponent } from '../add-pokemon/add-pokemon.component';
import { forkJoin } from 'rxjs';


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

@Component({
  selector: 'app-ui-pokemon-table',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  templateUrl: './ui-pokemon-table.component.html',
  styleUrl: './ui-pokemon-table.component.css'
})

export class UiPokemonTableComponent implements OnInit{
  pokemonSource: any[] = [];
  newPokemonName: string = '';
  displayedColumns: string[] = ['id', 'image', 'name', 'url', 'delete'];
  startTable: boolean = false;

  constructor (
    private getPokemonService: GetPokemonDataService,
    public newPokemonDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.getPokemonService.getPokemon('https://pokeapi.co/api/v2/pokemon').subscribe(
      (items: { results: { name: string; url: string }[] }) => {
        const requests = items.results.map(pokemon => this.getPokemonService.getPokemonDetails(pokemon.url));

        forkJoin<PokemonDetail[]>(requests).subscribe((details: PokemonDetail[]) => {
          this.pokemonSource = details.map((detail, index) => ({
            id: detail.id,
            name: detail.name,
            gif: detail.sprites.other.showdown.front_default,
            url: items.results[index].url
          }));

          console.log(this.pokemonSource);
        });
      }
    );
  }

  deletePokemon(pokemonName: string): void {
    const index = this.pokemonSource.findIndex(pokemon => pokemon.name === pokemonName);
  
    if (index !== -1) {
      this.pokemonSource = this.pokemonSource.slice(0, index).concat(this.pokemonSource.slice(index + 1));
      console.log(this.pokemonSource);
    }
  }

  openNewPokemonDialog(): void {
    const newPokemonDialogRef = this.newPokemonDialog.open(AddPokemonComponent)

    newPokemonDialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.pokemonSource.push(result)
      }
    })
  }

}
