import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Entidad } from '../../models/entidad.model';
import { EntidadService } from '../../services/entidad.service';


@Component({
  selector: 'app-entidad-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entidad-create.component.html'
})
export class EntidadCreateComponent {
  entidad: Entidad = {
    nit: '',
    nombre: ''
  };

  constructor(
    private entidadService: EntidadService,
    private router: Router
  ) {}

  guardarEntidad(): void {
    this.entidadService.crearEntidad(this.entidad).subscribe({
      next: () => {
        alert('Entidad creada exitosamente');
        this.router.navigate(['/entidades']);
      },
      error: (err) => {
        console.error('Error al crear la entidad', err);
        alert('Error al crear la entidad');
      }
    });
  }
}

