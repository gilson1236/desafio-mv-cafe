import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Colaborador } from '../models/colaborador';
import { ColaboradorService } from '../services/colaborador.service';

@Component({
  selector: 'app-colaborador-detalhado',
  templateUrl: './colaborador-detalhado.component.html',
  styleUrls: ['./colaborador-detalhado.component.scss']
})
export class ColaboradorDetalhadoComponent implements OnInit {

  id: number;
  colaborador: Colaborador;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private colaboradorService: ColaboradorService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.colaborador = new Colaborador();

    this.colaboradorService.getColaboradorDetalhado(this.id)
      .subscribe(data => {
          console.log(data)
          this.colaborador = data;
      }, error => console.log(error));
  }

  listar() {
    this.router.navigate(['/lista']);
  }

}
