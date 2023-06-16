import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRegionDetailsComponent } from './country-region-details.component';

describe('CountryRegionDetailsComponent', () => {
  let component: CountryRegionDetailsComponent;
  let fixture: ComponentFixture<CountryRegionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryRegionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryRegionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
