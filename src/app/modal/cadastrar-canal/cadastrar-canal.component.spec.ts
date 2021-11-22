import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCanalComponent } from './cadastrar-canal.component';

describe('CadastrarCanalComponent', () => {
  let component: CadastrarCanalComponent;
  let fixture: ComponentFixture<CadastrarCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
