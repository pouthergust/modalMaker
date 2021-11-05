import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferirAtendimentoComponent } from './transferir-atendimento.component';
import { ModalGenericoModule } from '../modal-generico/modal-generico.module';



@NgModule({
  declarations: [
    TransferirAtendimentoComponent
  ],
  imports: [
    CommonModule,
    ModalGenericoModule
  ],
  exports: [
    TransferirAtendimentoComponent
  ]
})
export class TransferirAtendimentoModule { }
