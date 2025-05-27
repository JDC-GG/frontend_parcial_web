import { Routes } from '@angular/router';
import { EntidadListComponent } from './components/entidad-list/entidad-list.component';
import { EntidadCreateComponent } from './components/entidad-create/entidad-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'entidades', pathMatch: 'full' },
  { path: 'entidades', component: EntidadListComponent },
  { path: 'entidades/nuevo', component: EntidadCreateComponent }
];

