import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemParamterMasterComponent } from './item-paramter-master.component';

describe('ItemParamterMasterComponent', () => {
  let component: ItemParamterMasterComponent;
  let fixture: ComponentFixture<ItemParamterMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemParamterMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemParamterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
