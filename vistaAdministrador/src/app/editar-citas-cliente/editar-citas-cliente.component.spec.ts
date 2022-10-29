import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCitasClienteComponent } from './editar-citas-cliente.component';

describe('EditarCitasClienteComponent', () => {
  let component: EditarCitasClienteComponent;
  let fixture: ComponentFixture<EditarCitasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCitasClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCitasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
