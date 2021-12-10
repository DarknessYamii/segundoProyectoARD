import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadojuegosComponent } from './listadojuegos.component';

describe('ListadojuegosComponent', () => {
  let component: ListadojuegosComponent;
  let fixture: ComponentFixture<ListadojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadojuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
