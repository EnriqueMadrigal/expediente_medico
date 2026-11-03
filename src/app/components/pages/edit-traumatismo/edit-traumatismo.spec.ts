import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraumatismo } from './edit-traumatismo';

describe('EditTraumatismo', () => {
  let component: EditTraumatismo;
  let fixture: ComponentFixture<EditTraumatismo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTraumatismo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTraumatismo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
