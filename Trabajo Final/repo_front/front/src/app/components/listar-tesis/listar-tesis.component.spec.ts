import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTesisComponent } from './listar-tesis.component';

describe('ListarTesisComponent', () => {
  let component: ListarTesisComponent;
  let fixture: ComponentFixture<ListarTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
