import { Component } from '@angular/core';
import { Parola } from './types/parola.type';
import { UtilDizionarioService } from './services/util-dizionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestione-dizionario';

  listaDiParole: Parola[] = [];

  constructor(public dizionario: UtilDizionarioService) { }
}
