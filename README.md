# Gestione Dizionario

Questo progetto è una semplice applicazione Angular per la gestione di un dizionario. Permette agli utenti di aggiungere nuove parole con i loro significati, cercare parole esistenti e visualizzare l'intero elenco.


## Descrizione Approfondita del Progetto

L'applicazione è strutturata in due componenti principali: un form per l'inserimento e la ricerca di parole, e una lista per la visualizzazione delle parole. Gli utenti possono inserire una parola e il suo significato, aggiungendoli al dizionario. È possibile filtrare la lista digitando nella barra di ricerca, e un pulsante di reset permette di cancellare tutti i filtri. La logica di gestione delle parole (aggiunta, filtraggio, reset) è centralizzata in un servizio Angular, dimostrando l'uso dei servizi per la condivisione dello stato tra componenti. I dati sono gestiti in memoria e non persistono al ricaricamento della pagina.


## Tecnologie Utilizzate

- **Angular**: Framework per la costruzione dell'applicazione web.

- **TypeScript**: Linguaggio di programmazione per lo sviluppo dell'applicazione.

- **HTML**: Struttura dei componenti e del template.

- **SCSS (Sass)**: Per lo styling dei componenti.

- **Bootstrap 5**: Framework CSS utilizzato per il layout e lo stile di base (come list-group, btn, d-flex).


## Funzionalità Principali

- **Aggiunta Parole**: Inserimento di nuove parole e dei loro significati tramite un form dedicato.

- **Ricerca/Filtro Dinamico**: Filtra la lista delle parole in tempo reale mentre l'utente digita nella barra di ricerca.

- **Visualizzazione Lista**: Mostra tutte le parole presenti nel dizionario o quelle filtrate, con alternanza di colori per una migliore leggibilità.

- **Reset Dizionario**: Un pulsante per eliminare i filtri di ricerca e mostrare l'intero dizionario.

- **Validazione Semplice**: Avviso per campi vuoti prima dell'aggiunta di una parola.

- **Architettura a Componenti e Servizi**: Utilizzo di componenti (FormInserimentoComponent, VisualizzazioneListaComponent) e un servizio (UtilDizionarioService) per una gestione modulare e riutilizzabile della logica e dei dati.


## Come Avviare il Progetto

Segui questi passaggi per configurare ed eseguire il progetto localmente:


### Prerequisiti

- Node.js (versione LTS raccomandata)

- npm (Node Package Manager) o Yarn

- Angular CLI: Installa globalmente Angular CLI se non lo hai già fatto:

npm install -g @angular/cli


### Installazione

1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/progetto-gestione-dizionario.git

Assicurati di sostituire 'progetto-gestione-dizionario.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd progetto-gestione-dizionario

3. Installa le dipendenze del progetto:

npm install


### Avvio dell'Applicazione
1. Avvia il server di sviluppo Angular:


ng serve


2. Apri il tuo browser web e naviga su http://localhost:4200/. L'applicazione si ricaricherà automaticamente ad ogni modifica dei file sorgente.

## Stato del Progetto
Questo progetto è un'applicazione Angular funzionale che dimostra i concetti fondamentali di Angular, inclusa la gestione dello stato con i servizi, la comunicazione tra componenti e la validazione dei form lato client. I dati del dizionario sono in-memory e non persistono al ricaricamento della pagina.


## Contatti

- **GitHub**: https://github.com/ValeVent

- **LinkedIn**: https://www.linkedin.com/in/valentina-venturo

- **Sito Web**: http://www.valentinaventuro.it

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.


