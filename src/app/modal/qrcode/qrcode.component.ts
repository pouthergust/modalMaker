import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  title = 'Ler QR code';
  url = 'https://cdn.dooca.store/816/products/aooba-fem-cropped-bordo.jpg?v=1620918606';
  // url = "background-image: url('https://cdn.dooca.store/816/products/aooba-fem-cropped-bordo.jpg?v=1620918606')";
  transform = '';

  constructor(

  ) {
   }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  aooba(event: MouseEvent): void {
    let img = document.querySelector('.img') as HTMLDivElement;
    // let img = document.querySelector('.img') as HTMLImageElement;
    img.style.backgroundPosition = `${event.x / -5}px ${event.y / -5}px`;
    // img.style.objectPosition = `${event.x / -10}% ${event.y / -10}%`;
  }

  @HostListener('mouseout', ['$event'])
  saida(event: MouseEvent): void {
    let img = document.querySelector('.img') as HTMLDivElement;
    // let img = document.querySelector('.img') as HTMLImageElement;
    img.style.backgroundPosition = `center`;
    // img.style.objectPosition = `50% 50%`;
  }
}
