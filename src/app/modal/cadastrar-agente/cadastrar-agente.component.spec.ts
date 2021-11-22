import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAgenteComponent } from './cadastrar-agente.component';

describe('CadastrarAgenteComponent', () => {
  let component: CadastrarAgenteComponent;
  let fixture: ComponentFixture<CadastrarAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAgenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
