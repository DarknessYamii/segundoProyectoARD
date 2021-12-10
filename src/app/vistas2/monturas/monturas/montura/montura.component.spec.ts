import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonturaComponent } from './montura.component';

describe('MonturaComponent', () => {
  let component: MonturaComponent;
  let fixture: ComponentFixture<MonturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
