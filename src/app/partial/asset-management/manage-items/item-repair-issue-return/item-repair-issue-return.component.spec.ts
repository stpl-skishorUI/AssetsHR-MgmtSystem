import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRepairIssueReturnComponent } from './item-repair-issue-return.component';

describe('ItemRepairIssueReturnComponent', () => {
  let component: ItemRepairIssueReturnComponent;
  let fixture: ComponentFixture<ItemRepairIssueReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRepairIssueReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRepairIssueReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
