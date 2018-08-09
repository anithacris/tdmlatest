import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmDetailsComponent } from './tdm-details.component';

describe('TdmDetailsComponent', () => {
  let component: TdmDetailsComponent;
  let fixture: ComponentFixture<TdmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
