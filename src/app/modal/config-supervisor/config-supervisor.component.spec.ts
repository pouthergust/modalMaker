import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSupervisorComponent } from './config-supervisor.component';

describe('ConfigSupervisorComponent', () => {
  let component: ConfigSupervisorComponent;
  let fixture: ComponentFixture<ConfigSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
