import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTesisComponent } from './crear-tesis.component';

describe('CrearTesisComponent', () => {
  let component: CrearTesisComponent;
  let fixture: ComponentFixture<CrearTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
