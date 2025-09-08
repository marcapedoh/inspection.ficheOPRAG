import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSearch } from './fiche-search';

describe('FicheSearch', () => {
  let component: FicheSearch;
  let fixture: ComponentFixture<FicheSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
