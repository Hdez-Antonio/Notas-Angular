import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NotaList } from './components/nota-list/nota-list';

@Component({
  selector: 'app-root',
  imports: [NotaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('notas-app');
}
