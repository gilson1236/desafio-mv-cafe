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

  colaboradores: Colaborador[] = [];
  opcoesSubscription: Subscription;
  opcoes: OpcaoCafe[] = [];

  constructor(private colaboradorService: ColaboradorService) { }
  
  ngOnDestroy(): void {
    //this.opcoesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    const subscription = this.colaboradorService.getColaboradorList().subscribe(
      colaboradores => { 
        this.colaboradores = colaboradores;
      }
    );
    
    this.opcoesSubscription.add(subscription);
  }
  
}
