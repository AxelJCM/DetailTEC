import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestpuntosComponent } from './gestpuntos.component';

describe('GestpuntosComponent', () => {
  let component: GestpuntosComponent;
  let fixture: ComponentFixture<GestpuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestpuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestpuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
