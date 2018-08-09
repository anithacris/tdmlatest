import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmdisplayComponent } from './tdmdisplay.component';

describe('TdmdisplayComponent', () => {
  let component: TdmdisplayComponent;
  let fixture: ComponentFixture<TdmdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
