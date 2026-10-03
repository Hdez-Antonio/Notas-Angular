import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { Nota } from '../../models/nota';

@Component({
  selector: 'app-nota-list',
  imports: [FormsModule],
  templateUrl: './nota-list.html',
  styleUrl: './nota-list.css',
})
export class NotaList {

  notas: Nota[] = [
    {
      id: 1,
      titulo: 'Aprendiendo Angular',
      contenido: 'Estudiar componentes y servicios de Angular',    
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
  notaSeleccionada: Nota | null = null;
  editando = false;
  nuevaNota = {
    titulo: '',
    contenido: ''
  };
  mostrarFormulario = false;

  
  eliminarNota(id: number): void
  {
    this.notas = this.notas.filter(nota => nota.id !== id);
  }

  verNota(nota: Nota): void 
  {
    this.notaSeleccionada = nota;
  }

  editarNota(nota: Nota): void
  {
    this.notaSeleccionada = { ...nota };
    this.editando = true;
  }

  guardarNota(): void
  {
    if (!this.notaSeleccionada) 
    {
      return;
    }
    const indice = this.notas.findIndex(nota => nota.id === this.notaSeleccionada!.id);
    if (indice !== -1) 
    {
      this.notas[indice] = 
      {
        ...this.notaSeleccionada,
        fechaModificacion: new Date()
      };

    }
    this.editando = false;
    this.notaSeleccionada = null;
  }

  crearNota(): void {

    const nuevaNota: Nota = {
      id: this.notas.length + 1,
      titulo: this.nuevaNota.titulo,
      contenido: this.nuevaNota.contenido,
      fechaCreacion: new Date()
    };

    this.notas.push(nuevaNota);
    this.nuevaNota = {
      titulo: '',
      contenido: ''
    };
    this.mostrarFormulario = false;
  }

  mostrarNuevaNota(): void 
  {
    this.mostrarFormulario = true;
  }

  cancelarNuevaNota(): void 
  {
    this.mostrarFormulario = false;
    this.nuevaNota = {
      titulo: '',
      contenido: ''
    };
  }

}
