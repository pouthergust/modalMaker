import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-modal',
  templateUrl: './tag-modal.component.html',
  styleUrls: ['./tag-modal.component.scss']
})
export class TagModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  close() {
    alert('Fechou');
  }

}
