import { Component, Input } from '@angular/core';
import { UtilDizionarioService } from '../../services/util-dizionario.service';
import { Parola } from '../../types/parola.type';

@Component({
  selector: 'app-form-inserimento',
  templateUrl: './form-inserimento.component.html',
  styleUrl: './form-inserimento.component.scss'
})
export class FormInserimentoComponent {

  listaDiParole: Parola[] = [];

  @Input()
  parolaInserita: string = '';

  @Input()
  parolaSignificato: string = '';

  @Input()
  parolaRicercata: string = '';

  
  constructor(private dizionario: UtilDizionarioService) { 
    this.listaDiParole = dizionario.listaDiParole;
  }


  campoVuoto(): void {
      alert("Inserisci una parola e un significato.");
  }

  aggiungi(parolaInserita: string, parolaSignificato: string): void {
    if (!this.parolaInserita.trim() || !this.parolaSignificato.trim()) {
      this.campoVuoto();
      return;
    }
    this.dizionario.aggiungiParola({ parola: parolaInserita, significato: parolaSignificato });
  
    // Aggiorno la lista locale dopo l'aggiunta
    this.listaDiParole = this.dizionario.listaDiParole;
    this.parolaInserita = '';
    this.parolaSignificato = '';
  } 

  // Per resettare la lista
  reset(): void {
    this.dizionario.resetParole();
    this.parolaRicercata = '';
  }

  // Metodo per aggiornare la ricerca
  cerca(parolaRicercata: string): void {
    this.dizionario.setParolaRicercata(parolaRicercata);  // Imposto la parolaRicercata nel servizio
    this.listaDiParole = this.dizionario.getListaFiltrata();  // Ottengo la lista filtrata
  }

}
