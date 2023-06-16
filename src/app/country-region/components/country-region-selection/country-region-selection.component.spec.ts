import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRegionSelectionComponent } from './country-region-selection.component';

describe('CountryRegionSelectionComponent', () => {
  let component: CountryRegionSelectionComponent;
  let fixture: ComponentFixture<CountryRegionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryRegionSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryRegionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
