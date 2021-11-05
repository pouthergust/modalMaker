import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-file',
  templateUrl: './modal-file.component.html',
  styleUrls: ['./modal-file.component.scss']
})
export class ModalFileComponent implements OnInit {

  fileName: string = '';
  fileType: string = '';

  constructor(
    // public dialogRef: MatDialogRef<ModalFileComponent>,
  ) {}

  ngOnInit(): void {
  }

  close() {
    // this.dialogRef.close();
  }

}
