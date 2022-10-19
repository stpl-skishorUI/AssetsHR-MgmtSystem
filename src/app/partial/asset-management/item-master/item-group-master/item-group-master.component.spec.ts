import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupMasterComponent } from './item-group-master.component';

describe('ItemGroupMasterComponent', () => {
  let component: ItemGroupMasterComponent;
  let fixture: ComponentFixture<ItemGroupMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGroupMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
