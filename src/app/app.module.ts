import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalContatoBoilerplateModule } from './modal/modal-contato-boilerplate/modal-contato-boilerplate.module';
import { ModalModule } from './modal/modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    ModalModule,
    ModalContatoBoilerplateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
