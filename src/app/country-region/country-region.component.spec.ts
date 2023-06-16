import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRegionComponent } from './country-region.component';

describe('CountryRegionComponent', () => {
  let component: CountryRegionComponent;
  let fixture: ComponentFixture<CountryRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
