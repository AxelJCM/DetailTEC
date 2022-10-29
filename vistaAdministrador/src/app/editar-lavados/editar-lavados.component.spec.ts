import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLavadosComponent } from './editar-lavados.component';

describe('EditarLavadosComponent', () => {
  let component: EditarLavadosComponent;
  let fixture: ComponentFixture<EditarLavadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLavadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarLavadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
