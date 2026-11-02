import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAntecedentesPersonales } from './edit-antecedentes-personales';

describe('EditAntecedentesPersonales', () => {
  let component: EditAntecedentesPersonales;
  let fixture: ComponentFixture<EditAntecedentesPersonales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAntecedentesPersonales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAntecedentesPersonales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
