import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormInserimentoComponent } from './components/form-inserimento/form-inserimento.component';
import { VisualizzazioneListaComponent } from './components/visualizzazione-lista/visualizzazione-lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormInserimentoComponent,
    VisualizzazioneListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
