import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-contato-boilerplate',
  templateUrl: './modal-contato-boilerplate.component.html',
  styleUrls: ['./modal-contato-boilerplate.component.scss']
})
export class ModalContatoBoilerplateComponent implements OnInit {

  @Input() title: string = 'Enviar contato';
  @Input() subtitle: string = 'Selecione o contato';
  @Input() opcoes: string[] = [];
  @Input() colecao: string = 'contato';
  @Input() btnTxt: string = 'Enviar';
  @Input() metodo = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
