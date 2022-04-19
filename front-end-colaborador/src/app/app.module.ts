import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CriarColaboradorComponent } from './colaboradores/criar-colaborador/criar-colaborador.component';
import { ListarColaboradoresComponent } from './colaboradores/listar-colaboradores/listar-colaboradores.component';
import { ColaboradorDetalhadoComponent } from './colaboradores/colaborador-detalhado/colaborador-detalhado.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarColaboradorComponent,
    ListarColaboradoresComponent,
    ColaboradorDetalhadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
