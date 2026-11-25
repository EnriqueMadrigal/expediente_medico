import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnfermedad } from './add-enfermedad';

describe('AddEnfermedad', () => {
  let component: AddEnfermedad;
  let fixture: ComponentFixture<AddEnfermedad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEnfermedad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnfermedad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
