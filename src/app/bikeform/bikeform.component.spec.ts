import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeformComponent } from './bikeform.component';

describe('BikeformComponent', () => {
  let component: BikeformComponent;
  let fixture: ComponentFixture<BikeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
