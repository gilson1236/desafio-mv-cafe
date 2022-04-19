import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  colaboradores: Observable<Colaborador[]>;
  opcoesSubscription: Subscription;
  //opcoes: OpcaoCafe[] = [];

  constructor(private colaboradorService: ColaboradorService, 
    private router: Router) { }
  
  ngOnDestroy(): void {
    //this.opcoesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    /*const subscription = this.colaboradorService.getColaboradorList().subscribe(
      colaboradores => { 
        this.colaboradores = colaboradores;
      }
    );
    
    this.opcoesSubscription.add(subscription);
  }*/

    this.colaboradores = this.colaboradorService.getColaboradorList();
  } 

  detalharColaborador(id: number){
    this.router.navigate(['detalhes', id]);
  }
  
  deleteColaborador(id: number){
    this.colaboradorService.deletarColaborador(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }
}
