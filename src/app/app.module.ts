import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricoTransferenciasComponent } from './components/historico-transferencias/historico-transferencias.component';
import { TransferenciasComponent } from './components/transferencias/transferencias.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoDestinatarioComponent } from './components/nuevo-destinatario/nuevo-destinatario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoTransferenciasComponent,
    TransferenciasComponent,
    LoginComponent,
    NuevoDestinatarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
