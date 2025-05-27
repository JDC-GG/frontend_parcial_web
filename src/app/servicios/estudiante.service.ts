import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  edad: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private apiUrl = 'http://localhost:8080/estudiantes';

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }

  crearEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, estudiante);
  }

  actualizarEstudiante(id: number, estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.apiUrl}/${id}`, estudiante);
  }

  eliminarEstudiante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
