import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarColaboradoresComponent } from './colaboradores/listar-colaboradores/listar-colaboradores.component';
import { CriarColaboradorComponent } from './colaboradores/criar-colaborador/criar-colaborador.component';
import { ColaboradorDetalhadoComponent } from './colaboradores/colaborador-detalhado/colaborador-detalhado.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/lista', pathMatch: 'full'
  },
  {
    path: 'lista', component: ListarColaboradoresComponent
  },
  {
    path: 'colaborador', component: CriarColaboradorComponent
  },
  {
    path: 'detalhes/:id', component: ColaboradorDetalhadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
