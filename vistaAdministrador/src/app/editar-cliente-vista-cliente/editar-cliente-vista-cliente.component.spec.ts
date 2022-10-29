import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClienteVistaClienteComponent } from './editar-cliente-vista-cliente.component';

describe('EditarClienteVistaClienteComponent', () => {
  let component: EditarClienteVistaClienteComponent;
  let fixture: ComponentFixture<EditarClienteVistaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarClienteVistaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarClienteVistaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
