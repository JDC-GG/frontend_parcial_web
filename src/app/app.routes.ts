import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './componentes/lista-estudiantes/lista-estudiantes.component';
import { CrearEstudianteComponent } from './componentes/crear-estudiante/crear-estudiante.component';

export const routes: Routes = [
  { path: '', component: ListaEstudiantesComponent },
  { path: 'crear', component: CrearEstudianteComponent },
  { path: 'editar/:id', component: CrearEstudianteComponent }
];
