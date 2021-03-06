import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferirAtendimentoModule } from './transferir-atendimento/transferir-atendimento.module';
import { ModalGenericoModule } from './modal-generico/modal-generico.module';
import { ButtonModule } from './button/button.module';
import { ModalFileModule } from './modal-file/modal-file.module';
import { TagModalModule } from './tag-modal/tag-modal.module';
import { IniciarNovoModule } from './iniciar-novo/iniciar-novo.module';
import { QrcodeModule } from './qrcode/qrcode.module';
import { ConfigSupervisorModule } from './config-supervisor/config-supervisor.module';
import { CadastrarCanalModule } from './cadastrar-canal/cadastrar-canal.module';
import { CadastrarAgenteModule } from './cadastrar-agente/cadastrar-agente.module';
import { CadastrarClienteModalModule } from './cadastrar-cliente-modal/cadastrar-cliente-modal.module';
import { NovoGrupoModule } from './novo-grupo/novo-grupo.module';

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
    NovoGrupoModule,
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
    NovoGrupoModule,
    ModalFileModule,
    TagModalModule,
    QrcodeModule,
    ButtonModule
  ]
})
export class ModalModule { }
