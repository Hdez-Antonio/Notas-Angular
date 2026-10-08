import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota';

@Component({
  selector: 'app-nota-list',
  imports: [FormsModule],
  templateUrl: './nota-list.html',
  styleUrl: './nota-list.css',
})
export class NotaList implements OnInit
{

  notas: Nota[] = [];
  notaSeleccionada: Nota | null = null;
  editando = false;
  nuevaNota = {
    titulo: '',
    contenido: ''
  };
  mostrarFormulario = false;

  constructor(private notaService: NotaService) {}

  ngOnInit(): void
  {
    this.notas = this.notaService.obtenerNotas();
  }

  eliminarNota(id: number): void
  {
    this.notaService.eliminarNota(id);
    this.notas = this.notaService.obtenerNotas();
  }

  verNota(nota: Nota): void 
  {
    this.notaSeleccionada = nota;
     this.editando = false;
  }

  editarNota(nota: Nota): void
  {
    this.notaSeleccionada = { ...nota };
    this.editando = true;
  }

  guardarNota(): void
  {
    if (!this.notaSeleccionada) {
      return;
    }
    const notaActualizada: Nota = {
      ...this.notaSeleccionada,
      fechaModificacion: new Date()
    };
    this.notaService.actualizarNota(notaActualizada);
    this.notas = this.notaService.obtenerNotas();
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

    this.notaService.crearNota(nuevaNota);
    this.notas = this.notaService.obtenerNotas();

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
