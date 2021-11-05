import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClienteModalComponent } from './cadastrar-cliente-modal.component';



@NgModule({
  declarations: [CadastrarClienteModalComponent],
  imports: [
    CommonModule
  ],
  exports: [CadastrarClienteModalComponent]
})
export class CadastrarClienteModalModule { }
