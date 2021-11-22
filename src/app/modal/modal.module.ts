import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferirAtendimentoModule } from './transferir-atendimento/transferir-atendimento.module';
import { ModalGenericoComponent } from './modal-generico/modal-generico.component';
import { ModalGenericoModule } from './modal-generico/modal-generico.module';
import { ButtonModule } from './button/button.module';
import { ModalFileModule } from './modal-file/modal-file.module';
import { TagModalModule } from './tag-modal/tag-modal.module';
import { IniciarNovoModule } from './iniciar-novo/iniciar-novo.module';
import { CadastrarClienteModalComponent } from './cadastrar-cliente-modal/cadastrar-cliente-modal.component';
import { CadastrarClienteModalModule } from './cadastrar-cliente-modal/cadastrar-cliente-modal.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { ConfigSupervisorModule } from './config-supervisor/config-supervisor.module';
import { CadastrarCanalModule } from './cadastrar-canal/cadastrar-canal.module';
import { CadastrarAgenteModule } from './cadastrar-agente/cadastrar-agente.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TransferirAtendimentoModule,
    CadastrarClienteModalModule,
    ConfigSupervisorModule,
    CadastrarAgenteModule,
    CadastrarCanalModule,
    ModalGenericoModule,
    IniciarNovoModule,
    ModalFileModule,
    TagModalModule,
    QrcodeModule,
    ButtonModule
  ],
  exports: [
    TransferirAtendimentoModule,
    CadastrarClienteModalModule,
    ConfigSupervisorModule,
    CadastrarAgenteModule,
    CadastrarCanalModule,
    ModalGenericoModule,
    IniciarNovoModule,
    ModalFileModule,
    TagModalModule,
    QrcodeModule,
    ButtonModule
  ]
})
export class ModalModule { }
