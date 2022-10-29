import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesVistaClienteComponent } from './clientes-vista-cliente.component';

describe('ClientesVistaClienteComponent', () => {
  let component: ClientesVistaClienteComponent;
  let fixture: ComponentFixture<ClientesVistaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesVistaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesVistaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
