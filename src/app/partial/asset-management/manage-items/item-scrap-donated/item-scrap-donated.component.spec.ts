import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemScrapDonatedComponent } from './item-scrap-donated.component';

describe('ItemScrapDonatedComponent', () => {
  let component: ItemScrapDonatedComponent;
  let fixture: ComponentFixture<ItemScrapDonatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemScrapDonatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemScrapDonatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
