import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Colaborador } from '../models/colaborador';
import { ColaboradorService } from '../services/colaborador.service';

@Component({
  selector: 'app-listar-colaboradores',
  templateUrl: './listar-colaboradores.component.html',
  styleUrls: ['./listar-colaboradores.component.scss']
})
export class ListarColaboradoresComponent implements OnInit {

  colaboradores: Observable<Colaborador[]>;

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.colaboradores = this.colaboradorService.getColaboradorList();
  }

  
}
