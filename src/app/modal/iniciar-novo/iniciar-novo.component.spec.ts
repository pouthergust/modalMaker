import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarNovoComponent } from './iniciar-novo.component';

describe('IniciarNovoComponent', () => {
  let component: IniciarNovoComponent;
  let fixture: ComponentFixture<IniciarNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
