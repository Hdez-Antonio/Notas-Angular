import { Injectable } from '@angular/core';
import { Nota } from '../models/nota';
@Injectable({
  providedIn: 'root',
})

export class NotaService
{

  private notas: Nota[] = [
    {
      id: 1,
      titulo: 'Aprender Angular',
      contenido: 'Estudiar componentes y servicios de Angular.',
      fechaCreacion: new Date()
    },
    {
      id: 2,
      titulo: 'Aprender Node.js',
      contenido: 'Crear una API REST utilizando Express.',
      fechaCreacion: new Date()
    },
    {
      id: 3,
      titulo: 'SQL Server',
      contenido: 'Crear la base de datos para nuestra aplicación.',
      fechaCreacion: new Date()
    }
  ];

  obtenerNotas(): Nota[] {

    return this.notas;

  }

  obtenerNotaPorId(id: number): Nota | undefined {

    return this.notas.find(
      nota => nota.id === id
    );

  }

  crearNota(nota: Nota): void {

    this.notas.push(nota);

  }

  actualizarNota(nota: Nota): void {

    const indice = this.notas.findIndex(
      n => n.id === nota.id
    );

    if (indice !== -1) {

      this.notas[indice] = nota;

    }

  }

  eliminarNota(id: number): void {

    this.notas = this.notas.filter(
      nota => nota.id !== id
    );
  }

}
