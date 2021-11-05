import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarClienteModalComponent } from './cadastrar-cliente-modal.component';

describe('CadastrarClienteModalComponent', () => {
  let component: CadastrarClienteModalComponent;
  let fixture: ComponentFixture<CadastrarClienteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarClienteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarClienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
