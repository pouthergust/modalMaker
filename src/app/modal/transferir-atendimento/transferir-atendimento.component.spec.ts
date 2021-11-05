import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferirAtendimentoComponent } from './transferir-atendimento.component';

describe('TransferirAtendimentoComponent', () => {
  let component: TransferirAtendimentoComponent;
  let fixture: ComponentFixture<TransferirAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferirAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferirAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
