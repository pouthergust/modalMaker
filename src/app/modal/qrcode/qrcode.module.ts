import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeComponent } from './qrcode.component';



@NgModule({
  declarations: [
    QrcodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QrcodeComponent
  ]
})
export class QrcodeModule { }
