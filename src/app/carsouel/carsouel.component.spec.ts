import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsouelComponent } from './carsouel.component';

describe('CarsouelComponent', () => {
  let component: CarsouelComponent;
  let fixture: ComponentFixture<CarsouelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsouelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
