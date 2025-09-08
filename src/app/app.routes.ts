import { Routes } from '@angular/router';
import { FicheControlComponent } from './fiche-control/fiche-control.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { FicheSearch } from './fiche-search/fiche-search';

export const routes: Routes = [
  { path: '', component: DataEntryComponent },
  { path: 'sheet', component: FicheControlComponent },
  { path: "search", component: FicheSearch }
];
