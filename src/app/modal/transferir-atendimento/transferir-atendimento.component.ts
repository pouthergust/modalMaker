import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transferir-atendimento',
  templateUrl: './transferir-atendimento.component.html',
  styleUrls: ['./transferir-atendimento.component.scss']
})
export class TransferirAtendimentoComponent implements OnInit {

  agentes: string[] = ['Gabriel', 'Henrique']
  grupos: string[] = ['Grupo 1', 'Grupo 2']

  metodoUm() {
    alert('Metodo Um')
  }
  metodoDois() {
    alert('Metodo Dois')
  }
  metodoTres() {
    alert('Metodo Tres')
  }

  constructor(
    public dialogRef: MatDialogRef<TransferirAtendimentoComponent>
  ) { }

  ngOnInit(): void {
  }

  aooba() {
    this.dialogRef.close();
  }

}
