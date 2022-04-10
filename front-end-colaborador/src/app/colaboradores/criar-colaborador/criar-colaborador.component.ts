import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Colaborador } from '../models/colaborador';
import { ColaboradorService } from './../services/colaborador.service';


@Component({
  selector: 'app-criar-colaborador',
  templateUrl: './criar-colaborador.component.html',
  styleUrls: ['./criar-colaborador.component.scss']
})
export class CriarColaboradorComponent implements OnInit {

  colaborador: Colaborador= new Colaborador();
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
    this.colaboradorService.salvarColaborador(this.colaborador).subscribe((data) => 
    console.log(data),
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
