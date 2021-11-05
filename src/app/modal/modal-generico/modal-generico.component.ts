import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-generico',
  templateUrl: './modal-generico.component.html',
  styleUrls: ['./modal-generico.component.scss']
})
export class ModalGenericoComponent implements OnInit {

  // @Input() imgIcon: string = 'src/assets/attendance.svg';
  @Input() title: string = 'Transferir atendimento';
  @Input() subtitle: string = '';
  @Input() header: boolean = false;
  @Input() opcoes: string[] = [];
  @Input() colecao: string = '';
  @Input() btnTxt: string = '';
  @Input() metodo = () => {};
  @Input() close = () => {};

  constructor() { }

  ngOnInit(): void {
  }

}
