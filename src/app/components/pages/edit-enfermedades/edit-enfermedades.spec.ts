import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnfermedades } from './edit-enfermedades';

describe('EditEnfermedades', () => {
  let component: EditEnfermedades;
  let fixture: ComponentFixture<EditEnfermedades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEnfermedades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEnfermedades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
