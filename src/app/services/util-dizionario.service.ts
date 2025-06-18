import { Injectable } from '@angular/core';
import { Parola } from '../types/parola.type';

@Injectable({
  providedIn: 'root'
})
export class UtilDizionarioService {

  listaDiParole: Parola[] = [];

  parolaInserita: string = '';
  parolaSignificato: string = '';
  parolaRicercata: string = '';

  constructor() { }

  getListaDiParole(): Parola[] {
    return this.listaDiParole;
  }

  aggiungiParola(parola: Parola): void {
      this.listaDiParole.push(parola); 
  }


  // Ottengo la lista filtrata in base alla ricerca
  getListaFiltrata(): Parola[] {
    if (!this.parolaRicercata.trim()) {
      return this.listaDiParole;  // Se la ricerca è vuota, restituisco tutta la lista
    }
    return this.listaDiParole.filter(parola =>
      parola.parola.toLowerCase().includes(this.parolaRicercata.toLowerCase())  // Filtro case-insensitive
    );
  }

  // Imposto la parola da cercare
  setParolaRicercata(parola: string): void {
    this.parolaRicercata = parola;
  }

  // Elimino i filtri alle parole inserite
  resetParole(): void {
    this.parolaRicercata = '';
  }

}
