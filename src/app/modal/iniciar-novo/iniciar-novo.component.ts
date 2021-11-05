import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-novo',
  templateUrl: './iniciar-novo.component.html',
  styleUrls: ['./iniciar-novo.component.scss']
})
export class IniciarNovoComponent implements OnInit {

  @Input() title: string = 'Iniciar conversa';
  @Input() subtitle: string = 'Selecione o contato';
  @Input() opcoes: string[] = [];
  @Input() colecao: string = 'contato';
  @Input() btnTxt: string = 'Enviar';
  @Input() metodo = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
