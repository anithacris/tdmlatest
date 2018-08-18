import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmdetailterComponent } from './tdmdetailter.component';

describe('TdmdetailterComponent', () => {
  let component: TdmdetailterComponent;
  let fixture: ComponentFixture<TdmdetailterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmdetailterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmdetailterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
