import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContatoBoilerplateComponent } from './modal-contato-boilerplate.component';

describe('ModalContatoBoilerplateComponent', () => {
  let component: ModalContatoBoilerplateComponent;
  let fixture: ComponentFixture<ModalContatoBoilerplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContatoBoilerplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContatoBoilerplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
