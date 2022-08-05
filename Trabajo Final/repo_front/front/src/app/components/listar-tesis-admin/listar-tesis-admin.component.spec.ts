import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTesisAdminComponent } from './listar-tesis-admin.component';

describe('ListarTesisAdminComponent', () => {
  let component: ListarTesisAdminComponent;
  let fixture: ComponentFixture<ListarTesisAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTesisAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTesisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
