import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarColaboradoresComponent } from './colaboradores/listar-colaboradores/listar-colaboradores.component';
import { CriarColaboradorComponent } from './colaboradores/criar-colaborador/criar-colaborador.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/lista', pathMatch: 'full'
  },
  {
    path: 'lista', component: ListarColaboradoresComponent
  },
  {
    path: 'colaborador', component: CriarColaboradorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
