import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuclienteComponent } from './menucliente.component';

describe('MenuclienteComponent', () => {
  let component: MenuclienteComponent;
  let fixture: ComponentFixture<MenuclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
