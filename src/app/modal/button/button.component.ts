import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFileComponent } from '../modal-file/modal-file.component';
import { TransferirAtendimentoComponent } from '../transferir-atendimento/transferir-atendimento.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {


  constructor(
    public dialog: MatDialog
  ) {}

  abrir() {
    const dialogRef = this.dialog.open(ModalFileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
