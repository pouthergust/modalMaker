import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeComponent } from './qrcode.component';
import { NgxImgZoomModule } from 'ngx-img-zoom';



@NgModule({
  declarations: [
    QrcodeComponent
  ],
  imports: [
    CommonModule,
    NgxImgZoomModule
  ],
  exports: [
    QrcodeComponent
  ]
})
export class QrcodeModule { }
