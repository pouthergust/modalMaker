import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFileComponent } from './modal-file.component';

describe('ModalFileComponent', () => {
  let component: ModalFileComponent;
  let fixture: ComponentFixture<ModalFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
