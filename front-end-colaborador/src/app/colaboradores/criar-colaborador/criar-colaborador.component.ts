import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Colaborador } from '../models/colaborador';
import { OpcaoCafe } from '../models/opcao-cafe';
import { ColaboradorService } from './../services/colaborador.service';

@Component({
  selector: 'app-criar-colaborador',
  templateUrl: './criar-colaborador.component.html',
  styleUrls: ['./criar-colaborador.component.scss']
})
export class CriarColaboradorComponent implements OnInit {

  colaborador: Colaborador = new Colaborador();
  opcaoCafe: OpcaoCafe = new OpcaoCafe();
  opcoes: OpcaoCafe[] = [];
  submitted = false;

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newColaborador(): void{
    this.submitted = false;
    this.colaborador = new Colaborador();
  }

  salvar(){
    this.opcoes.push(this.opcaoCafe);
    this.colaborador.opcaoCafe = this.opcoes;
    this.colaboradorService.salvarColaborador(this.colaborador).subscribe(() => 
    console.log(this.colaborador.nome),
    error => console.log(error));
    this.colaborador = new Colaborador();
    this.goToList();
  }

  onSubmit(){
    this.submitted = true;
    this.salvar();
  }

  goToList(){
    this.router.navigate(['/listar']);
  }
}
