import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigSupervisorComponent } from './config-supervisor.component';
import { ToggleModule } from 'src/app/components/toggle/toggle.module';



@NgModule({
  declarations: [
    ConfigSupervisorComponent
  ],
  imports: [
    CommonModule,
    ToggleModule
  ],
  exports: [
    ConfigSupervisorComponent
  ]
})
export class ConfigSupervisorModule { }
