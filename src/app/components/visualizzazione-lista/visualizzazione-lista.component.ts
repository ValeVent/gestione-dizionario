import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UtilDizionarioService } from '../../services/util-dizionario.service';
import { Parola } from '../../types/parola.type';

@Component({
  selector: 'app-visualizzazione-lista',
  templateUrl: './visualizzazione-lista.component.html',
  styleUrl: './visualizzazione-lista.component.scss'
})
export class VisualizzazioneListaComponent implements OnInit {

  constructor(private dizionario: UtilDizionarioService) { }

  ngOnInit(): void {
    // Quando il componente viene inizializzato, ottieni la lista aggiornata
  }

  get listaDiParole(): Parola[] {
    return this.dizionario.listaDiParole;
  }

  // Getter per ottenere la lista filtrata
  get listaDiParoleFiltrate(): Parola[] {
    return this.dizionario.getListaFiltrata();  // Ottengo la lista filtrata dal servizio
  }

}
