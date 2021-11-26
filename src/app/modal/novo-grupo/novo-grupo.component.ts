import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-grupo',
  templateUrl: './novo-grupo.component.html',
  styleUrls: ['./novo-grupo.component.scss']
})
export class NovoGrupoComponent implements OnInit {
  title = 'Cadastrar Grupo';

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    window.alert('Fechou')
  }

}
