import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Colaborador } from '../models/colaborador';
import { OpcaoCafe } from '../models/opcao-cafe';
import { ColaboradorService } from '../services/colaborador.service';

@Component({
  selector: 'app-listar-colaboradores',
  templateUrl: './listar-colaboradores.component.html',
  styleUrls: ['./listar-colaboradores.component.scss']
})
export class ListarColaboradoresComponent implements OnInit, OnDestroy {

  colaboradores$: Observable<Colaborador[]>;
  opcoesSubscription: Subscription;
  opcoes: OpcaoCafe[];

  constructor(private colaboradorService: ColaboradorService) { }
  ngOnDestroy(): void {
    this.opcoesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.colaboradores$ = this.colaboradorService.getColaboradorList();
    this.opcoesSubscription = this.colaboradores$.subscribe(opcoes => this.opcoes = opcoes);
  }
  
}
