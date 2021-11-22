import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-agente',
  templateUrl: './cadastrar-agente.component.html',
  styleUrls: ['./cadastrar-agente.component.scss']
})
export class CadastrarAgenteComponent implements OnInit {
  title = 'Cadastrar Agente';

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    window.alert('Fechou')
  }

}
