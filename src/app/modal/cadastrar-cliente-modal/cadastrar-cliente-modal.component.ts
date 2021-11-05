import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente-modal',
  templateUrl: './cadastrar-cliente-modal.component.html',
  styleUrls: ['./cadastrar-cliente-modal.component.scss']
})
export class CadastrarClienteModalComponent implements OnInit {

  @Input() title: string = 'Cadastrar novo Cliente';
  @Input() subtitle: string = 'Selecione o contato';
  @Input() opcoes: string[] = [];
  @Input() colecao: string = 'contato';
  @Input() btnTxt: string = 'Salvar contato';
  @Input() metodo = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
