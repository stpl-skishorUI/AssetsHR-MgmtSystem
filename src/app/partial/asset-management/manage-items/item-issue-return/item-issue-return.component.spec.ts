import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIssueReturnComponent } from './item-issue-return.component';

describe('ItemIssueReturnComponent', () => {
  let component: ItemIssueReturnComponent;
  let fixture: ComponentFixture<ItemIssueReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIssueReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemIssueReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
