import { Routes } from '@angular/router';
import { UiPokemonTableComponent } from './components/ui-pokemon-table/ui-pokemon-table.component';
import { sessionGuard } from './guard/session.guard';

export const routes: Routes = [
    { path: 'loaded-pokemon', component: UiPokemonTableComponent, canActivate: [sessionGuard] },
];
