import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-canal',
  templateUrl: './cadastrar-canal.component.html',
  styleUrls: ['./cadastrar-canal.component.scss']
})
export class CadastrarCanalComponent implements OnInit {
  title = 'Cadastrar Canal';

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    window.alert('Fechou')
  }

}
