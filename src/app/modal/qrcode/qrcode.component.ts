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

    // console.log(fig.getBoundingClientRect())
  }

  aoba() {
    let fig = document.querySelector('.mArea') as HTMLElement;
    let img = document.querySelector('.mImg') as HTMLImageElement;

    console.log(fig, img)
  }

  @HostListener('mouseenter', ['$event'])
  aooba(event: MouseEvent): void {
    let img = document.querySelector('.mImg') as HTMLImageElement;
    let fig = document.querySelector('.mArea') as HTMLElement;

    let clientX = event.clientX - fig.offsetLeft
    let clientY = event.clientY - fig.offsetTop

    console.log(event)
    this.aoba()

    let mWidth = fig.offsetWidth
    let mHeight = fig.offsetHeight

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    img.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`;


    // img.style.transform = `scale(2)`;
    // img.style.objectPosition = `-${clientX}% -${clientY}%`;

    // img.style.transform = `scale(2)`;
    // img.style.objectPosition = `${clientX}px, ${clientY}px`;
    // img.style.backgroundPosition = `${event.x / -10}px ${event.y / 15}%`;
  }

  @HostListener('mouseout', ['$event'])
  saida(event: MouseEvent): void {
    let img = document.querySelector('.mImg') as HTMLImageElement;
    // let img = document.querySelector('.img') as HTMLImageElement;
    // img.style.backgroundPosition = `center`;
    img.style.transform = `translate(0%, 0%) scale(1)`;
    // img.style.transform = `scale(1)`;
    // img.style.objectPosition = `50% 50%`;
  }
}
